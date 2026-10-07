"""Gør alle mp3-filer under sange/ til fast bitrate (CBR).

Browsere kan ikke spole præcist i mp3-filer med variabel bitrate (VBR) – tiden
kan ramme op til et par sekunder ved siden af, så teksten kommer forkert efter
spoling. Med fast bitrate passer tiden altid.

Brug:  python3 .github/scripts/cbr.py [mappe]   (standard: sange)
"""
import os
import subprocess
import sys

BITRATE = "256k"
RATES = {1: 32, 2: 40, 3: 48, 4: 56, 5: 64, 6: 80, 7: 96, 8: 112, 9: 128,
         10: 160, 11: 192, 12: 224, 13: 256, 14: 320}
SAMPLE_RATES = [44100, 48000, 32000]


def frame_bitrates(path, max_frames=4000):
    """Returnerer mængden af bitrates i de første frames (MPEG-1 Layer III)."""
    with open(path, "rb") as fh:
        data = fh.read()
    i = 0
    if data[:3] == b"ID3":
        size = ((data[6] & 0x7F) << 21) | ((data[7] & 0x7F) << 14) | ((data[8] & 0x7F) << 7) | (data[9] & 0x7F)
        i = 10 + size
    seen, frames = set(), 0
    while i < len(data) - 4 and frames < max_frames:
        if data[i] == 0xFF and (data[i + 1] & 0xE0) == 0xE0:
            b = data[i + 2] >> 4
            sr_i = (data[i + 2] >> 2) & 3
            pad = (data[i + 2] >> 1) & 1
            if b in RATES and sr_i < 3:
                length = 144000 * RATES[b] // SAMPLE_RATES[sr_i] + pad
                if length > 4:
                    seen.add(RATES[b])
                    frames += 1
                    i += length
                    continue
        i += 1
    return seen


def is_vbr(path):
    return len(frame_bitrates(path)) > 1


def convert(path):
    tmp = path + ".cbr.tmp.mp3"
    subprocess.run(
        ["ffmpeg", "-v", "error", "-y", "-i", path, "-map", "0:a", "-map_metadata", "0",
         "-codec:a", "libmp3lame", "-b:a", BITRATE, "-id3v2_version", "3", tmp],
        check=True,
    )
    os.replace(tmp, path)


def main():
    root = sys.argv[1] if len(sys.argv) > 1 else "sange"
    changed = []
    for dirpath, _, files in os.walk(root):
        for name in sorted(files):
            if name.lower().endswith(".mp3"):
                path = os.path.join(dirpath, name)
                if is_vbr(path):
                    convert(path)
                    changed.append(path)
    for path in changed:
        print("Konverteret:", path)
    if not changed:
        print("Alle mp3-filer har allerede fast bitrate.")


if __name__ == "__main__":
    main()

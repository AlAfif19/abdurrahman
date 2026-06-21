from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent
FRONTEND = ROOT / "frontend"


def run(command: list[str], cwd: Path) -> int:
    return subprocess.call(command, cwd=cwd)


def main() -> int:
    package_json = FRONTEND / "package.json"
    if not package_json.exists():
        print("frontend/package.json was not found.", file=sys.stderr)
        return 1

    if not (FRONTEND / "node_modules").exists():
        install_code = run(["npm", "install"], FRONTEND)
        if install_code != 0:
            return install_code

    return run(["npm", "run", "dev"], FRONTEND)


if __name__ == "__main__":
    raise SystemExit(main())

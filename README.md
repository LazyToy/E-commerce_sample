# Baneul Iyagi (바늘 이야기) - E-commerce Sample

이 프로젝트는 `user_global` 규칙과 `global_skills`를 준수하여 설정되었습니다.

## 🛠 적용된 설정
- **가상환경**: `python -m venv baneul-iyagi` (프로젝트 폴더명과 동일)
- **VS Code 설정**: `.vscode/settings.json`을 통해 터미널 기본 경로가 프로젝트 루트(`baneul-iyagi`)로 설정됨
- **디자인 원칙**: `frontend-design` 스킬을 기반으로 한 프리미엄 UI 개발 가이드라인 적용

## 🚀 실행 방법

### 1. 가상환경 활성화 (Python 로직 작업 시)
```powershell
# Windows PowerShell
.\baneul-iyagi\Scripts\activate
```

### 2. 의존성 설치 및 개발 서버 실행 (Node.js)
```bash
# 프로젝트 루트 디렉터리에서 수행
npm install
npm run dev
```

## 🧪 테스트 지침
- UI 변경 시 `frontend-design` 스킬의 디자인 원칙을 준수해야 합니다.
- 웹 기능 검증 시 `webapp-testing` 스킬의 Playwright 패턴을 활용합니다.

# WeWIN GAS to .NET Core + React Migration

This repo now contains:

- `backend`: ASP.NET Core Web API, EF Core migrations, PostgreSQL, idempotent Excel importer, media downloader, Azure Speech hook.
- `frontend`: React + Vite client calling the new `.NET` API with the full login → choose game → choose level → choose week → game menu flow.
- Existing GAS/static files are kept for comparison during migration.

## 1. PostgreSQL

Create a local database:

```powershell
createdb wewin
```

Default connection string is in `backend/appsettings.json`:

```json
"Host=localhost;Port=5432;Database=wewin;Username=postgres;Password=postgres"
```

Change it to match your PostgreSQL user/password.

## 2. Run Backend

```powershell
cd backend
dotnet run
```

The API starts at `http://localhost:5222`.

Import existing Excel data into PostgreSQL:

```powershell
curl -X POST http://localhost:5222/api/admin/import/excel
```

Import Excel and download media into `backend/wwwroot/media`:

```powershell
curl -X POST "http://localhost:5222/api/admin/import/excel?downloadMedia=true"
```

The importer reads `GameWewin.xlsx` by default. It maps these sheets:

- `Users`
- `Units`
- `GameData`
- `Game_LookChoose`
- `Game_Pronunciation`
- `Images`
- `Audios`

The importer is idempotent and updates rows by source keys instead of deleting all existing tables.

Create/update schema with EF migrations:

```powershell
cd backend
dotnet ef database update
```

## 3. Azure Speech

Add Azure Speech credentials in `backend/appsettings.json` or environment variables:

```json
"AzureSpeech": {
  "Key": "YOUR_KEY",
  "Region": "southeastasia"
}
```

Current backend endpoint:

```text
POST /api/speech/pronunciation
multipart/form-data:
  audio: file
  targetText: word or phrase
```

The endpoint is wired for Azure Pronunciation Assessment. Browser `MediaRecorder` support varies; the first implementation accepts the upload flow and currently gives the clearest result with WAV input.
The React client now records WAV through WebAudio for the pronunciation flow.

## 4. Run Frontend

```powershell
cd frontend
npm run dev
```

Optional API base override:

```powershell
$env:VITE_API_BASE_URL="http://localhost:5222/api"
npm run dev
```

## 5. Validation

Recommended checks:

```powershell
cd backend
dotnet build

cd ../frontend
npm run build
```

Then compare .NET API results against GAS for the same `game`, `level`, `week`, and `slug`.

Main migrated frontend flows:

- Login
- Choose game
- Choose level
- Choose week
- Unit sidebar and game menu
- Catch Vocabulary
- Listen & Choose
- Look & Choose
- Pronunciation
- Summary

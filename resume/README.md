# Resume Files

✅ **This is the CORRECT location for resume files!**

## 📄 Current Resume

- `Niraj_Kamal_Resume.pdf` - Your current resume displayed on the portfolio site

## 🔄 How to Update Your Resume

1. **Replace the PDF file** in this directory with your updated resume
2. **Keep the same filename** (`Niraj_Kamal_Resume.pdf`) to avoid code changes
3. **Build and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

## 📍 Why This Location?

- Files in `public/` are copied directly to `dist/` during build
- Your resume is accessible at: `https://nirajkamal.github.io/resume/Niraj_Kamal_Resume.pdf`
- This location is referenced in `src/pages/ResumePage.tsx`

## 🚫 Do NOT place resume files in:

- ❌ `src/assets/resume/` - Wrong location, not used
- ❌ `dist/resume/` - Build output only, gets overwritten on each build
- ❌ `build/resume/` - Old build directory, not used

## 📝 Changing the Filename

If you need to use a different filename:

1. Replace the PDF in this directory
2. Update `src/pages/ResumePage.tsx`:
   ```tsx
   const resumePdfPath = "/resume/YOUR_NEW_FILENAME.pdf";
   ```
3. Rebuild and deploy

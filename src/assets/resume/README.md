# Resume Management

⚠️ **IMPORTANT: This directory is NOT used for resume files!**

## � Correct Location

Resume files should be placed in **`public/resume/`** directory, NOT here.

## 🔄 Updating Your Resume

To update your resume:

1. **Prepare your new resume PDF**:
   - Make sure it's properly formatted and ready for viewing online
   - Name it consistently (e.g., `Niraj_Kamal_Resume.pdf`)
   - Keep the file size reasonable (under 5MB is recommended)

2. **Place it in the correct location**:
   - Navigate to `public/resume/` directory (at project root)
   - Replace the existing PDF file with your updated version
   - Keep the same filename to avoid code changes

3. **If changing the filename**:
   - Update the reference in the `ResumePage.tsx` component:
   ```tsx
   // In src/pages/ResumePage.tsx
   const resumePdfPath = "/resume/[NEW_FILENAME].pdf";
   ```

4. **Deploy the updated site**:
   ```bash
   npm run build
   npm run deploy
   ```

## 📂 Why `public/resume/` and not here?

- Files in `public/` are copied to the root of `dist/` during build
- This allows the resume to be served at `/resume/Niraj_Kamal_Resume.pdf`
- Files in `src/assets/` are processed by the bundler and not suitable for large PDFs

## 📱 Resume Page Features

The resume page in the portfolio includes:

1. **PDF Viewer** - Displays the resume directly in the browser
2. **Download Button** - Allows visitors to download the resume
3. **Responsive Design** - Adjusts for different screen sizes

## 🔍 SEO Tips for Your Resume

To make your resume more discoverable:

1. Use a descriptive filename with your name
2. Ensure the PDF has proper metadata (title, author, keywords)
3. Make sure the text in the PDF is selectable (not just an image)
4. Include relevant keywords related to your skills and target positions
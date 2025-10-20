# Resume Management

This directory contains the resume PDF file displayed on the portfolio site.

## 📄 Current Resume

The current resume file is `Niraj_Kamal_Resume.pdf`. This file is displayed on the resume page of the portfolio website.

## 🔄 Updating Your Resume

To update your resume:

1. **Prepare your new resume PDF**:
   - Make sure it's properly formatted and ready for viewing online
   - Name it consistently (e.g., `Niraj_Kamal_Resume.pdf`)
   - Keep the file size reasonable (under 5MB is recommended)

2. **Replace the existing file**:
   - Simply replace the existing PDF file in this directory with your updated version
   - Keep the same filename to avoid code changes

3. **If changing the filename**:
   - Update the reference in the `ResumePage.tsx` component:
   ```tsx
   // In src/pages/ResumePage.tsx
   const resumeUrl = "/src/assets/resume/[NEW_FILENAME].pdf";
   ```

4. **Deploy the updated site**:
   ```bash
   npm run deploy
   ```

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
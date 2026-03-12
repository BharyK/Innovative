interface FaqsType {
    id: number;
    title: string;
    content: string;
}

export const Orderingfaqs: FaqsType[] = [
    { id: 1, title: 'How can I change the color scheme of the admin template?', content: 'Navigate to the "Theme Settings" page, where you\'ll find options to choose a primary color and accent color. Select your desired colors and save the changes.' },
    { id: 2, title: 'Is it possible to upload a custom logo for my admin dashboard?', content: 'Yes, you can upload a custom logo. Visit the "Logo & Branding" section and use the upload feature to replace the default logo with your own.' },
    { id: 3, title: 'Are there predefined themes available, or can I create a custom theme?', content: 'The admin template provides both predefined themes and the option to create custom themes. Explore the "Theme Gallery" for pre-made themes or use the "Customize Theme" feature for a personalized look.' },
    { id: 4, title: 'Can I use my own CSS styles to override the default styles?', content: 'Yes, you can add custom CSS styles. In the "Advanced Settings," find the "Custom CSS" section and enter your styles. Ensure compatibility and avoid conflicting with existing styles.' },
    { id: 5, title: 'How do I enable or disable the dark mode?', content: 'To toggle dark mode, go to the "Appearance" settings. Find the "Dark Mode" option and switch it on or off based on your preference.' },
];

export const Paymentfaqs: FaqsType[] = [
    { id: 1, title: 'What are user roles, and how do they affect access permissions?', content: 'User roles define the level of access. Visit "User Roles" in the admin settings to manage roles and customize permissions for each role.' },
    { id: 2, title: 'Can I reset a user\'s password as an administrator?', content: 'Yes, as an administrator, you can reset a user\'s password. Go to the "User Management" page, select the user, and choose the "Reset Password" option.' },
    { id: 3, title: 'Is there a way to import multiple users simultaneously?', content: 'Yes, use the "Bulk Import" feature in the "User Management" section. Prepare a CSV file with user details and upload it for quick user creation.' },
    { id: 4, title: 'How can I view the login history of a specific user?', content: 'Access the user\'s profile in the "User Management" area and navigate to the "Login History" tab to view a detailed log of their login activities.' },
    { id: 5, title: 'What happens if a user forgets their password?', content: 'Users can reset their passwords by clicking on the "Forgot Password" link on the login page. An email with instructions for password reset will be sent to their registered email address.' }
];

export const ShippingFaqs: FaqsType[] = [
    { id: 1, title: 'Can I schedule automatic data exports for specific intervals?', content: 'Yes, you can schedule automatic exports. Explore the "Scheduled Exports" section to set up recurring exports and choose the data format and destination.' },
    { id: 2, title: 'What types of data can be exported from the admin template?', content: 'Most data tables in the admin template are exportable, including user data, reports, and custom datasets. Use the "Export" feature in the respective sections.' },
    { id: 3, title: 'Is there a limit to the size of exported files?', content: 'The export file size limit varies depending on the configuration. Check the "Export Settings" to view and adjust the size limits if necessary.' },
    { id: 4, title: 'Can I customize the format of exported reports?', content: 'Yes, you can customize export formats. In the "Export Settings," find options to choose the file format (CSV, Excel, etc.) and configure additional formatting options.' },
    { id: 5, title: 'How do I generate and download a quick summary report?', content: 'Navigate to the "Reports" section and use the "Generate Summary Report" button. Once generated, click on the download link to get the summary report.' }
];

export const RefundFaqs: FaqsType[] = [
    { id: 1, title: 'Are there security measures in place to protect against unauthorized access?', content: 'Yes, the admin template includes robust security features, including encryption, secure password hashing, and session management. Regularly update the system and use strong passwords for enhanced security.' },
    { id: 2, title: 'Can I enable two-factor authentication for admin accounts?', content: 'Yes, two-factor authentication is available. Access the "Security Settings" to enable and configure 2FA for added account security.' },
    { id: 3, title: 'What should I do if I suspect a security breach?', content: 'In case of a security concern, immediately change your password and notify the system administrator. Check the "Security Logs" for any suspicious activities.' },
    { id: 4, title: 'How often should I update the admin template for security patches?', content: 'It\'s advisable to regularly check for updates and apply security patches. Aim to update the admin template whenever a new version is released to ensure the latest security measures are in place.' },
    { id: 5, title: 'Can I restrict access to certain features based on user roles?', content: 'Yes, access restrictions can be set based on user roles. Utilize the "Role-based Access Control" (RBAC) settings to configure specific permissions for different user roles.' }
];

export const AccountManagementFaqs: FaqsType[] = [
    { id: 1, title: 'How do I rearrange the order of items in the navigation menu?', content: 'Visit the "Menu Settings" page, where you can easily drag and drop menu items to rearrange their order. Save the changes to update the navigation menu.' },
    { id: 2, title: 'Is it possible to customize the dashboard layout?', content: 'Yes, you can customize the dashboard layout. Use the "Dashboard Settings" to add or remove widgets, resize them, and arrange them according to your preferences.' },
    { id: 3, title: 'Can I set a default landing page for users after login?', content: 'Yes, you can set a default landing page. In the "User Settings" or "General Settings," find the option to specify the default page users will see upon login.' },
    { id: 4, title: 'How do I enable or disable email notifications for certain events?', content: 'Configure email notification settings in the "Notification Center" or "Email Settings" section. Specify the events for which you want to receive notifications.' },
    { id: 5, title: 'Is there a search feature available to quickly find specific data or settings?', content: 'Yes, a search feature is available. Look for the search bar in the header or navigation menu. Enter keywords to quickly locate specific data, settings, or pages.' }
];

export const CustomerSupportFaqs: FaqsType[] = [
    { id: 1, title: 'What should I do if the admin template is not loading correctly?', content: 'If you encounter loading issues, try clearing your browser cache or accessing the admin template in an incognito/private browsing window. If the problem persists, check the browser compatibility in the documentation.' },
    { id: 2, title: 'How can I report a bug or technical issue with the admin template?', content: 'Report bugs through the "Support" or "Feedback" section. Provide detailed information about the issue, including your browser version and steps to reproduce the problem.' },
    { id: 3, title: 'Are there known compatibility issues with certain browsers or devices?', content: 'Check the documentation for any known compatibility issues. Ensure you are using the latest browser versions, and report any issues to the support team.' },
    { id: 4, title: 'What do I do if I forget my username or encounter issues with login?', content: 'If you forget your username, use the "Forgot Username" link on the login page. If login issues persist, contact your system administrator or support for assistance.' },
    { id: 5, title: 'How do I check for updates and apply patches to fix issues?', content: 'Visit the "Updates" section to check for the latest version. If updates are available, follow the prompts to apply patches. This can resolve known issues and enhance system stability.' }
];

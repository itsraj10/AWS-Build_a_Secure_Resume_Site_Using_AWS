                                   # Build_a_Secure_Resume_Site_Using_AWS

Project Overview
____________________________________________________________________________________________________________________________

This project demonstrates the integration of AWS services such as S3, Route 53, AWS Certificate Manager, and CloudFront to create a secure, scalable, and efficient hosting environment for static websites. It showcases the ease with which AWS can be used to deploy a professional online presence while ensuring data security and accessibility.

![Screenshot 2024-09-05 at 4 33 58 PM](https://github.com/user-attachments/assets/c1bf8b64-1d34-4a9c-ab6a-9a3d340b3168)


Steps to Implement
____________________________________________________________________________________________________________________________

  1. Create Your Resume Code
     * Developed the HTML, CSS, and JavaScript code for the resume.
     * Used Chat-GPT to generate the initial code and made modifications to personalize the content.
  2. Set Up an S3 Bucket
     * Created an S3 bucket to store the resume files.
     * Disabled "Block all public access" for the S3 bucket to make the site accessible.
  3. Upload Resume to S3
     * Uploaded the HTML, CSS, and JavaScript files to the S3 bucket.
  
  4. Enable Static Website Hosting
     * Enabled "Static Website Hosting" in the properties section of the S3 bucket.
     * Set index.html as the index document for the website.

  5. Add S3 Bucket Policy
     * Added the appropriate bucket policy to allow public read access.
     * Verified that the bucket ARN was correctly used in the policy.

  6. View Resume via S3 Endpoint 
     * Accessed the resume via the S3 website endpoint.
     * The resume was successfully served by S3.

  7. Register a Custom Domain with Route 53
     * Registered a new custom domain using Amazon Route 53 to give the resume a more professional look.
     * Configured Route 53 to route traffic to the S3 bucket.

  8. Configure DNS with Route 53
     * Created an A Record with an Alias pointing to the S3 website.
     * Verified the DNS propagation and confirmed the domain was live.

  9. Set Up TLS/SSL with AWS Certificate Manager
     * Registered a TLS/SSL certificate using AWS Certificate Manager for secure HTTPS access.
     * Used the N. Virginia region to ensure compatibility with CloudFront.

 10. Validate SSL Certificate
     * Created a DNS validation record in Route 53 to validate the SSL certificate.

 11. Use CloudFront for HTTPS Support
     * Created a CloudFront distribution to serve the S3 content securely over HTTPS.
     * Configured CloudFront to redirect HTTP requests to HTTPS.
     * Applied the SSL certificate to the CloudFront distribution.

 12. Update Route 53 to Use CloudFront
     * Updated the Route 53 settings to point the custom domain to the CloudFront distribution.

 13. Test the Secure Resume Website
     * Verified that the resume website is accessible via the custom domain and secured with HTTPS.

Conclusion:
____________________________________________________________________________________________________________________________   
This project illustrates how to utilize AWS services—such as Amazon S3, Route 53, AWS Certificate Manager, and CloudFront to build and host a secure, professional resume site with a custom domain. By automating infrastructure tasks and ensuring HTTPS encryption, AWS provides a reliable, scalable, and secure environment for static websites without the need for extensive server management. This approach is highly effective for establishing a polished online presence, making it suitable for professionals to showcase their work.

____________________________________________________________________________________________________________________________  ____________________________________________________________________________________________________________________________  

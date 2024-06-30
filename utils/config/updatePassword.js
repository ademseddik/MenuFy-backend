const nodemailer = require('nodemailer');
const RandomString = require("randomstring");

const mailToSend = {
    sendMailInscription: async (req, res) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.PASSWORD}`,
            },
        });

        const options = {
            from: "ettouils505@gmail.com",
            to: req.body.email, // Utilisez req.body.email pour définir l'adresse email du destinataire
            subject: "Update Password",
            html:  `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head>
            <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="x-apple-disable-message-reformatting">
              <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
              <title></title>
              
                <style type="text/css">
                  @media only screen and (min-width: 620px) {
              .u-row {
                width: 600px !important;
              }
              .u-row .u-col {
                vertical-align: top;
              }
            
              .u-row .u-col-100 {
                width: 600px !important;
              }
            
            }
            
            @media (max-width: 620px) {
              .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
              }
              .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
              }
              .u-row {
                width: 100% !important;
              }
              .u-col {
                width: 100% !important;
              }
              .u-col > div {
                margin: 0 auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
            }
            
            table,
            tr,
            td {
              vertical-align: top;
              border-collapse: collapse;
            }
            
            p {
              margin: 0;
            }
            
            .ie-container table,
            .mso-container table {
              table-layout: fixed;
            }
            
            * {
              line-height: inherit;
            }
            
            a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
            }
            
            table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-container-padding-padding { padding: 40px 10px 10px !important; } #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 25% !important; } #u_content_heading_1 .v-font-size { font-size: 25px !important; } #u_content_text_1 .v-container-padding-padding { padding: 5px 10px 10px !important; } #u_content_text_1 .v-font-size { font-size: 14px !important; } #u_content_text_1 .v-text-align { text-align: center !important; } #u_content_button_1 .v-container-padding-padding { padding: 10px 10px 40px !important; } #u_content_button_1 .v-size-width { width: 50% !important; } #u_content_text_deprecated_1 .v-container-padding-padding { padding: 40px 10px 10px !important; } #u_content_text_deprecated_2 .v-container-padding-padding { padding: 10px 10px 40px !important; } }
                </style>
              
              
            
            <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css"><!--<![endif]-->
            
            </head>
            
            <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;style="background-image: url('https://cdn.templates.unlayer.com/assets/1697613131983-Layer%20bg.png'); background-repeat: no-repeat; background-size: cover;>
              <!--[if IE]><div class="ie-container"><![endif]-->
              <!--[if mso]><div class="mso-container"><![endif]-->
              <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ecf0f1;width:100%" cellpadding="0" cellspacing="0">
              <tbody>
              <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->
                
            
            <div class="u-row-container" style="padding: 0px;background-color: white">
              <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: white;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
                  
            <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #FFFFFF;width: 600px;padding: 0px;border-top: 0px solid white;border-left: 0px solid white;border-right: 0px solid white;border-bottom: 0px solid white;" valign="top"><![endif]-->
            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
              <div height: 100%;width: 100% !important;">
              <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid white;border-left: 0px solid white;border-right: 0px solid white;border-bottom: 0px solid white;"><!--<![endif]-->
              
              <table id="u_content_heading_1" style="font-family:'Open Sans',sans-serif; background-color: #FFFFFF;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
              <tbody>
                  <tr>
                      <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:13px 80px 10px;font-family:'Open Sans',sans-serif;" align="left">
                          <div class="v-text-align v-font-size" style="font-size: 20px; line-height: 90%; text-align: center; word-wrap: break-word;">
                              <h4 style="line-height: 90%;">Menu.com  vous souhaite la bienvenue!</h4>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
          
           
          <table id="u_content_image_1" style=" margin-bottom: 50px; font-family:'Open Sans',sans-serif; background-color: #FFFFFF;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
          <tbody>
            <tr>
              <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;font-family:'Open Sans',sans-serif; text-align: center;" align="left">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td class="" style="padding-right: 0px;padding-left: 0px; " align="center">
                      <img  align="center" border="0" src="https://assets.unlayer.com/stock-templates/1709634606754-logo44.png" alt="image" title="image" width="50%" height="auto">
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        
            
            <table id="u_content_heading_1" style="margin-top:37px;font-family:'Open Sans',sans-serif; background-color: #FFFFFF;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
              <tbody>
                <tr>
                  <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Open Sans',sans-serif;" align="left">
                    
                  <div class="v-text-align v-font-size" style="font-size: 16px; line-height: 170%; text-align: center; word-wrap: break-word;">
                  
                  <p style="line-height: 170%;">Thank you for join us! Please copy the code below to validate your email address and start exploring our application.</p>
                </div>
              
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
                    

            <table id="u_content_heading_1" style="font-family:'Open Sans',sans-serif; background-color: #FFFFFF;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
            <tbody>
                <tr>
                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Open Sans',sans-serif;" align="center">
                        <div class="v-text-align v-font-size" style="font-size: 16px; line-height: 170%; text-align: center; word-wrap: break-word;">
                            <div style="display: inline-block; margin-right: 10px;">
                                <img src="https://assets.unlayer.com/stock-templates/1709634275136-instagram.png"  alt="Instagram" style="width: 40px; height: 40px; border-radius: 50%;">
                            </div>
                            <div style="display: inline-block; margin-right: 10px;">
                                <img src="https://assets.unlayer.com/stock-templates/1709634299199-facebook.png" alt=" Facebook" style="width: 40px; height: 40px; border-radius: 50%;">
                            </div>
                            <div style="display: inline-block; margin-right: 10px;">
                                <img src="https://assets.unlayer.com/stock-templates/1709640367360-X.png" alt="Whatsapp" style="width: 40px; height: 40px; border-radius: 50%;">
                            </div>
                            <!-- Ajoutez d'autres icônes de réseaux sociaux de la même manière -->
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        
            
              <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div class="u-row-container" style="padding: 0px;background-color: white">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
              <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: white;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: white;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: white;"><![endif]-->
                
          <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid white;border-left: 0px solid white;border-right: 0px solid white;border-bottom: 0px solid white;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
          <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
            <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
            <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid white;border-left: 0px solid white;border-right: 0px solid white;border-bottom: 0px solid white;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
            
          <table id="u_content_text_deprecated_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
            <tbody>
              <tr>
                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:13px 80px 10px;font-family:'Open Sans',sans-serif;" align="left">
                  
            <div class="v-text-align v-font-size" style="line-height: 180%; text-align: center; word-wrap: break-word;">
              <p style="font-size: 14px; line-height: 180%;">if you have any questions, please email us at <a rel="noopener" href="https://www.unlayer.com" target="_blank">Menuapp@gmail.com</a></p>
            </div>
          
                </td>
              </tr>
            </tbody>
          </table>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
              <tbody>
                <tr>
                  <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:8px 0px;font-family:'Open Sans',sans-serif;" align="left">
                    
              <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                <tbody>
                  <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                      <span>&#160;</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            
                  </td>
                </tr>
              </tbody>
            </table>
            
            <table id="u_content_text_deprecated_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
              <tbody>
                <tr>
                  <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px;font-family:'Open Sans',sans-serif;" align="left">
                    
              <div class="v-text-align v-font-size" style="line-height: 160%; text-align: center; word-wrap: break-word;">
                <p style="font-size: 14px; line-height: 160%;"> © 2024 IPACT Consult Alright Reserved</p>
              </div>
            
                  </td>
                </tr>
              </tbody>  
            </table>
            
              <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
              </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            
            
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
              </tbody>
              </table>
              <!--[if mso]></div><![endif]-->
              <!--[if IE]></div><![endif]-->
            </body>
            
            </html>
            
        
                  
                  `,
        };
        

        transporter.sendMail(options, function (err, info) { 
            if (err) {
                return res.status(400).json({ error: "Error activating account" + err });
            } else {
                return res.status(200).json({ message: "An email has been sent" });
            }
        });
    }
};

module.exports = mailToSend;
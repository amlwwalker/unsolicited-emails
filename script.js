InboxSDK.load(2, 'sdk_unsol2024_d5ec588ede').then(function (sdk) {
    sdk.Toolbars.registerThreadButton({
      title: "Unsolicited email responder",
      iconUrl: chrome.runtime.getURL("logos/logo_16.png"),
      positions: ["THREAD"],
      listSection: sdk.Toolbars.SectionNames.OTHER,
      onClick: () => showTemplateSelectionDialog(sdk)
    });
  });

  const showTemplateSelectionDialog = (sdk) => {
    let modalView;
    const dialogContent = document.createElement('div');
    dialogContent.innerHTML = `
    <div>
        <input type="radio" id="professional" name="template" value="professional" checked>
        <label for="professional">Professional Email</label><br>
        <input type="radio" id="personal" name="template" value="personal">
        <label for="personal">Personal Email</label><br>
        <!-- Add more templates as needed -->
      </div>`
    const modalOptions = {
      el: dialogContent,
      title: "Choose Email Template",
      showCloseButton: true,
      buttons: [
        {
          title: "Select",
          onClick: (event) => {
            modalView.close();
            const selectedTemplate = dialogContent.querySelector('input[name="template"]:checked').value;
            modalView.close();
            composeEmailWithTemplate(sdk, selectedTemplate);
          }
        }
      ]
    };
    modalView = sdk.Widgets.showModalView(modalOptions);
};

const composeEmailWithTemplate = async (sdk, template) => {
    const myEmailAddress = sdk.User.getEmailAddress();
    // Define your templates
    const templates = {
      professional: `<p>I am writing to address the emails you have been sending to my personal work email address, <strong>${myEmailAddress}</strong>, without my prior consent. As an individual subscriber, I want to make it clear that I do not wish to receive unsolicited marketing communications at this email address.</p>
  
      <p>Under the UK's <strong>Privacy and Electronic Communications (EC Directive) Regulations 2003 (PECR)</strong>, sending marketing emails to individual subscribers without their consent is strictly prohibited.</p>
      
      <p>I ask you to immediately cease sending any further marketing emails to this address. Failure to comply with PECR may lead to formal complaints to the <strong>Information Commissioner's Office (ICO)</strong>, as I take data privacy seriously.</p>
      
      <p>I appreciate your understanding and prompt action in this matter.</p>`,
      personal: `<p>I am responding to inform you that I have received your unsolicited marketing email to my personal email address <strong>${myEmailAddress}</strong>, without my prior consent. Such practices are not only irritating but also violate the UK's Privacy and Electronic Communications (EC Directive) Regulations 2003 (PECR).</p>

      <p>As outlined in PECR, sending marketing emails to individuals without their consent is strictly prohibited. Therefore, I must insist that you immediately cease and desist from sending any further marketing communications to this address.</p>
      
      <p>Failure to comply with the UK government's regulations may result in formal complaints lodged with the Information Commissioner's Office (ICO), and your company could face severe penalties. Additionally, continued infringement could leave you liable to legal action under PECR and the General Data Protection Regulation (GDPR).</p>
      
      <p>I take data privacy seriously, and I expect full compliance with this request. Any acknowledgment or further correspondence will be considered an admission of your wrongdoing.</p>
      
      <p>Your prompt attention to this matter is appreciated.</p>`,
    };
  
    let unRegister = await sdk.Conversations.registerMessageViewHandler(
        async (messageView) => {
          if (messageView.getViewState() === "EXPANDED" && messageView.isLoaded()) {
            senderEmail = messageView.getSender().emailAddress;
            // const myEmailAddress = sdk.User.getEmailAddress();
            sdk.Compose.openNewComposeView().then(composeView => {
              composeView.setToRecipients([senderEmail]);
              composeView.setSubject(`Unsolicited email received from ${senderEmail}`);
              composeView.setBodyHTML(templates[template] || "Default body if no template is selected");
            });
          }
      });
      unRegister();
  };
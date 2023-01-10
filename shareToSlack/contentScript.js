

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === "damn it"){
    console.log(msg.text);
    console.log(msg.value);
    const entryText = document.querySelector("body > div.p-client_container > div > div.p-workspace-layout > div:nth-child(5) > div.p-workspace__primary_view > div > div.p-file_drag_drop__container > div > div.p-workspace__primary_view_footer.p-workspace__primary_view_footer--float > div > div > div > div.p-message_pane_input_inner_main > div > div > div > div.c-texty_input_unstyled__container.c-texty_input_unstyled__container--size_medium.c-texty_input_unstyled__container--multi_line.c-texty_input_unstyled__container--no_actions > div > div.ql-editor.ql-blank")
    const sendButton = document.querySelector("body > div.p-client_container > div > div.p-workspace-layout > div:nth-child(5) > div.p-workspace__primary_view > div > div.p-file_drag_drop__container > div > div.p-workspace__primary_view_footer.p-workspace__primary_view_footer--float > div > div > div > div.p-message_pane_input_inner_main > div > div > div > div.c-wysiwyg_container__footer.c-wysiwyg_container__footer--with_formatting > div.c-wysiwyg_container__suffix > span > button.c-button-unstyled.c-icon_button.c-icon_button--size_small.c-wysiwyg_container__button.c-wysiwyg_container__button--send.c-icon_button--default");
    // for (let i = 0; i < msg.value.length; i++) {
    //   entryText.textContent = msg.value[i];
    //   sendButton.click();
    //   // setTimeout(() => { sendButton.click(); }, 200);
    // }
    entryText.textContent = msg.value;
    setTimeout(() => { sendButton.click(); }, 400);
    
  } else {
    let images = Array.from(document.getElementsByTagName("img")).map(img => img.src).join(" \n ");
    chrome.runtime.sendMessage({text: "images",value:images});
  }
    
});

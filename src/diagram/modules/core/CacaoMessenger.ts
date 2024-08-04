export default class cacaoMessenger {
  private static _container: HTMLElement = document.getElementsByTagName('body')[0];

  static $inject: string[];

  /**
   * this method will pop up a dialog message that will disappear after 3 seconds
   * @param message
   */
  static showMessage(message: string, type: 'success' | 'error' = 'success') {
    let messageContainer = document.createElement('div');
    messageContainer.className = 'messenger-container';

    let messageIcon = document.createElement('div');
    messageIcon.className = 'messenger-icon';

    let textMessage = document.createElement('div');
    textMessage.className = 'messenger-message';

    this._container.appendChild(messageContainer);
    messageContainer.appendChild(messageIcon);
    messageContainer.appendChild(textMessage);

    if (type == 'success') {
      messageContainer.classList.add('messenger-correct');
      messageIcon.classList.add('messenger-icon-correct');
    } else {
      messageContainer.classList.add('messenger-error');
      messageIcon.classList.add('messenger-icon-error');
    }

    textMessage.innerHTML = message;

    setTimeout(() => {
      messageContainer.style.display = 'none';
    }, 3000);
  }
}

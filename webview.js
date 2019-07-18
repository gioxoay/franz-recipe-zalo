module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;
    const container = document.querySelector('#message-tab > .tab-red-dot');
    if (container) {
      if (container.classList.contains('fa-1')) {
        count = 1;
      } else if (container.classList.contains('fa-2')) {
        count = 2;
      } else if (container.classList.contains('fa-3')) {
        count = 3;
      } else if (container.classList.contains('fa-4')) {
        count = 4;
      } else if (container.classList.contains('fa-5')) {
        count = 5;
      } else {
        count = 5;
      }
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
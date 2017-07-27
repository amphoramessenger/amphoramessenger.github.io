// serviceworker.js
// The serviceworker context can respond to 'push' events and trigger
// notifications on the registration property
self.addEventListener("push", (event) => {
  let title =  "Amphora";
  let body = (event.data && event.data.text());
  let tag = "push-simple-demo-notification-tag";
  let icon = '/app.png';

  event.waitUntil(
    self.registration.showNotification(title, { body, icon, tag })
  )
});
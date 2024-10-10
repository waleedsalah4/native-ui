import { useState } from "react";
const useNotification = () => {
  const [permission, setPermission] = useState(Notification.permission);
  // Request notification permission
  const requestPermission = async () => {
    if (permission === "default") {
      const newPermission = await Notification.requestPermission();
      setPermission(newPermission);
    }
  };

  // Function to trigger a notification
  const notify = (title: string, options?: NotificationOptions) => {
    if (permission === "granted") {
      new Notification(title, options);
    } else if (permission === "default") {
      requestPermission().then(() => {
        if (Notification.permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  };

  return { notify };
};

export default useNotification;

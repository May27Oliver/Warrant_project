import styles from '/styles/css-notification.module.css';
import Vercel from '/public/image/vercel.svg';
import Image from 'next/image';

const CssNotification = () => {
  return (
    <div className={styles.chatNotification}>
      <div className="flex flex-col justify-center">
        <Image
          className={styles.chatNotificationLogo}
          src={Vercel}
          width={100}
          height={20}
          alt="ChitChat Logo"
        />
      </div>
      <div className={styles.chatNotificationContent}>
        <h4 className={styles.chatNotificationTitle}>ChitChat</h4>
        <p className={styles.chatNotificationMessage}>
          You have a new message!
        </p>
      </div>
    </div>
  );
};

export default CssNotification;

import "./notificationdropdown.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaHeart, FaRegComment, FaUserPlus } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { MdOutlineAttachMoney, MdOutlineSubscriptions, MdLiveTv, MdStarOutline } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

interface Notification {
  id: string;
  type: string;
  username: string;
  message: string;
  time: string;
}

const socialNotifications: Notification[] = [
  { id: "1", type: "like", username: "john_doe", message: "liked your post", time: "2h" },
  { id: "2", type: "comment", username: "jane_smith", message: "commented: Great photo!", time: "4h" },
  { id: "3", type: "follow", username: "alice_w", message: "started following you", time: "1d" },
  { id: "4", type: "reply", username: "bob_r", message: "replied to your comment", time: "3h" },
];

const activityNotifications: Notification[] = [
  { id: "5", type: "proposal", username: "admin", message: "Your proposal was approved", time: "30m" },
  { id: "6", type: "sponsorship", username: "mark_z", message: "joined your sponsorship", time: "2h" },
  { id: "7", type: "subscription", username: "anna_k", message: "subscribed to your channel", time: "1d" },
  { id: "8", type: "subscriber", username: "you", message: "You have a new subscriber", time: "3d" },
  { id: "9", type: "superchat", username: "viewer88", message: "sent a super chat!", time: "5h" },
];

const NotificationDropdown: React.FC = () => {
  const dispatch = useDispatch();
  //const status = useSelector((state: IState) => state.popupStatus.notificationDropdownStatus);
  const [section, setSection] = useState<"social" | "activity">("social");

  const toggleDropdown = () => {
    //dispatch(setNotificationDropdownStatus(status === "opened" ? "closed" : "opened"));
  };

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "like":
        return <FaHeart className="notification-dropdown__icon notification-dropdown__icon--like" />;
      case "comment":
        return <FaRegComment className="notification-dropdown__icon notification-dropdown__icon--comment" />;
      case "follow":
        return <FaUserPlus className="notification-dropdown__icon notification-dropdown__icon--follow" />;
      case "reply":
        return <BiRepost className="notification-dropdown__icon notification-dropdown__icon--reply" />;
      case "proposal":
        return <MdOutlineAttachMoney className="notification-dropdown__icon notification-dropdown__icon--proposal" />;
      case "sponsorship":
        return <MdStarOutline className="notification-dropdown__icon notification-dropdown__icon--sponsorship" />;
      case "subscription":
        return <MdOutlineSubscriptions className="notification-dropdown__icon notification-dropdown__icon--subscription" />;
      case "subscriber":
        return <FaUserPlus className="notification-dropdown__icon notification-dropdown__icon--subscriber" />;
      case "superchat":
        return <MdLiveTv className="notification-dropdown__icon notification-dropdown__icon--superchat" />;
      default:
        return null;
    }
  };

  const currentList = section === "social" ? socialNotifications : activityNotifications;

  return (
    <div className="notification-dropdown__container">
      <div className="notification-dropdown__navbar" onClick={toggleDropdown}>
        <IoIosNotificationsOutline
          className="notification-dropdown__navbar--icon"
          aria-label="Toggle notifications"
        />
        <p className="notification-dropdown__navbar--number">
          {socialNotifications.length + activityNotifications.length}
        </p>
      </div>

      {status === "opened" && (
        <div className="notification-dropdown">
          <div className="notification-dropdown__body">
            <div className="notification-dropdown__header">
              <h2 className="notification-dropdown__title">Notifications</h2>
              <button
                className="notification-dropdown__close"
                //onClick={() => dispatch(setNotificationDropdownStatus("closed"))}
                aria-label="Close notifications"
              >
                ×
              </button>
            </div>

            <div className="notification-dropdown__tabs">
              <button
                className={`notification-dropdown__tab ${section === "social" ? "active" : ""}`}
                onClick={() => setSection("social")}
              >
                Social
              </button>
              <button
                className={`notification-dropdown__tab ${section === "activity" ? "active" : ""}`}
                onClick={() => setSection("activity")}
              >
                Activity
              </button>
            </div>

            <div className="notification-dropdown__list">
              {currentList.map((notification) => (
                <div key={notification.id} className="notification-dropdown__item">
                  <div className="notification-dropdown__user">
                    {section === "social" ? (
                      <img
                        src={""}
                        alt={`${notification.username}'s profile`}
                        className="notification-dropdown__user-img"
                      />
                    ) : (
                      <div className="notification-dropdown__user-initials">CM</div>
                    )}
                    {getIcon(notification.type)}
                  </div>
                  <div className="notification-dropdown__content">
                    <div className="notification-dropdown__content-header">
                      <span className="notification-dropdown__username">{notification.username}</span>
                      <span className="notification-dropdown__message">{notification.message}</span>
                      <span className="notification-dropdown__time">{notification.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
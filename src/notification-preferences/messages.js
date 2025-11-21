import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  notificationHeading: {
    id: 'notification.preference.heading',
    defaultMessage: 'Thông báo',
    description: 'Notification title',
  },
  notificationAppTitle: {
    id: 'notification.preference.app.title',
    defaultMessage: `{
      key, select,
      discussion {Discussions}
      coursework {Course Work}
      updates {Updates}
      grading {Grading}
      other {{key}}
    }`,
    description: 'Display text for Notification Types',
  },
  notificationTitle: {
    id: 'notification.preference.title',
    defaultMessage: `{
      text, select,
      core {Activity notifications}
      newDiscussionPost {New discussion posts}
      newQuestionPost {New question posts}
      contentReported {Reported content}
      courseUpdates {Course updates}
      oraStaffNotifications {New ORA submission for staff grading}
      oraGradeAssigned {Essay assignment grade received}
      other {{text}}
    }`,
    description: 'Display text for Notification Types',
  },
  notificationChannel: {
    id: 'notification.preference.channel',
    defaultMessage: `{
      text, select,
      web {Web}
      email {Email}
      push {Push}
      other {{text}}
    }`,
    description: 'Display text for Notification Channel',
  },
  emailCadence: {
    id: 'notification.preference.emailCadence',
    defaultMessage: `{
      text, select,
      Daily {Daily}
      Weekly {Weekly}
      Immediately {Immediately}
      other {{text}}
    }`,
    description: 'Display text for Email Cadence',
  },
  typeLabel: {
    id: 'notification.preference.type.label',
    defaultMessage: 'Loại',
    description: 'Display text for type',
  },
  webLabel: {
    id: 'notification.preference.web.label',
    defaultMessage: 'Web',
    description: 'Display text for web',
  },
  notificationHelpEmail: {
    id: 'notification.preference.help.email',
    defaultMessage: 'Email',
    description: 'Display text for email',
  },
  notificationHelpPush: {
    id: 'notification.preference.help.push',
    defaultMessage: 'Đẩy',
    description: 'Display text for push',
  },
  loadMoreCourses: {
    id: 'notification.preference.load.more.courses',
    defaultMessage: 'Tải thêm khóa học',
    description: 'Load more button to load more courses',
  },
  notificationPreferenceGuideLink: {
    id: 'notification.preference.guide.link',
    defaultMessage: 'như chi tiết ở đây',
    description: 'Link of the notification preference for learner guide',
  },
  notificationPreferenceGuideBody: {
    id: 'notification.preference.guide.body',
    defaultMessage: 'Thông báo cho một số hoạt động nhất định được bật theo mặc định,',
    description: 'Body of the notification preferences for learner guide',
  },
  accountNotificationDescription: {
    id: 'account.notification.description',
    defaultMessage: 'Cài đặt cấp tài khoản áp dụng cho tất cả các khóa học. Thông báo cho từng khóa học có thể được thay đổi trong mỗi khóa học và sẽ ghi đè cài đặt cấp tài khoản.',
    description: 'Account notification description',
  },
  notificationCadenceDescription: {
    id: 'notification.cadence.description',
    defaultMessage: 'Thông báo hàng ngày được gửi vào lúc {dailyTime}. Thông báo hàng tuần được gửi vào lúc {weeklyTime}.',
    description: 'Notification cadence description',
  },
  notificationDefaultInfo: {
    id: 'notification.default.info',
    defaultMessage: 'Thông báo cho một số hoạt động nhất định được bật theo mặc định, như chi tiết ở đây',
    description: 'Default notification info',
  },
  notificationDropdownlabel: {
    id: 'notification.dropdown.label',
    defaultMessage: 'Chọn thông báo cho',
    description: 'Dropdown label',
  },
  notificationDropdownApplies: {
    id: 'notification.dropdown.applies',
    defaultMessage: 'Áp dụng cho tất cả khóa học',
    description: 'Dropdown applies to all courses',
  },
  notificationCourseDropdownApplies: {
    id: 'notification.dropdown.course.applies',
    defaultMessage: 'Ghi đè cài đặt toàn tài khoản',
    description: 'Dropdown applies to specific course',
  },
});

export default messages;

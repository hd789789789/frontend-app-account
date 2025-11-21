import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'account.settings.cannot.delete.account.text': {
    id: 'account.settings.cannot.delete.account.text',
    defaultMessage: 'Xin lưu ý rằng, vì mục đích tuân thủ pháp lý và quy định, hiện không thể xóa tài khoản.',
    description: 'This text is visible when user is not allowed to delete account',
  },
  'account.settings.delete.account.header': {
    id: 'account.settings.delete.account.header',
    defaultMessage: 'Xóa tài khoản của tôi',
    description: 'Header for the user account deletion area',
  },
  'account.settings.delete.account.subheader': {
    id: 'account.settings.delete.account.subheader',
    defaultMessage: 'Chúng tôi rất tiếc khi thấy bạn rời đi!',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.1': {
    id: 'account.settings.delete.account.text.1',
    defaultMessage: 'Xin lưu ý: Việc xóa tài khoản và dữ liệu cá nhân của bạn là vĩnh viễn và không thể hoàn tác. {siteName} sẽ không thể khôi phục tài khoản của bạn hoặc dữ liệu đã bị xóa.',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.2': {
    id: 'account.settings.delete.account.text.2',
    defaultMessage: 'Sau khi tài khoản của bạn bị xóa, bạn không thể sử dụng nó để học các khóa học trên {siteName}.',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.2.edX': {
    id: 'account.settings.delete.account.text.2.edX',
    defaultMessage: 'Sau khi tài khoản của bạn bị xóa, bạn không thể sử dụng nó để học các khóa học trên ứng dụng PiStudy',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.3.link': {
    id: 'account.settings.delete.account.text.3.link',
    defaultMessage: 'Làm theo các hướng dẫn này để in hoặc tải xuống chứng chỉ',
    description: 'This text is a link to a technical support page where users can learn how to print or download their certificates.',
  },
  'account.settings.delete.account.text.warning': {
    id: 'account.settings.delete.account.text.warning',
    defaultMessage: 'Cảnh báo: Xóa tài khoản là vĩnh viễn. Vui lòng đọc kỹ nội dung trên trước khi tiếp tục. Đây là hành động không thể đảo ngược và bạn sẽ không thể sử dụng cùng một email trên {siteName} nữa.',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.text.change.instead': {
    id: 'account.settings.delete.account.text.change.instead',
    defaultMessage: 'Muốn thay đổi email, tên hoặc mật khẩu của bạn thay thế?',
    description: 'A message in the user account deletion area',
  },
  'account.settings.delete.account.button': {
    id: 'account.settings.delete.account.button',
    defaultMessage: 'Xóa tài khoản của tôi',
    description: 'Button label to permanently delete your platform account',
  },
  'account.settings.delete.account.please.activate': {
    id: 'account.settings.delete.account.please.activate',
    defaultMessage: 'kích hoạt tài khoản của bạn',
    description: 'This is the text on a link that goes to the support page.  It is part of this sentence: Before proceeding, please activate your account.',
  },
  'account.settings.delete.account.please.confirm': {
    id: 'account.settings.delete.account.please.confirm',
    defaultMessage: 'xác nhận tài khoản của bạn',
    description: 'This is the text on a link that goes to the support page.  It is part of this sentence: Before proceeding, please confirm your account.',
  },
  'account.settings.delete.account.please.unlink': {
    id: 'account.settings.delete.account.please.unlink',
    defaultMessage: 'hủy liên kết tất cả tài khoản mạng xã hội',
    description: 'This is the text on a link that goes to the support page.  It is part of this sentence: Before proceeding, please unlink all social media accounts.',
  },
  'account.settings.delete.account.modal.header': {
    id: 'account.settings.delete.account.modal.header',
    defaultMessage: 'Bạn có chắc chắn không?',
    description: 'Title of the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.text.1': {
    id: 'account.settings.delete.account.modal.text.1',
    defaultMessage: 'Bạn đã chọn "Xóa tài khoản của tôi". Việc xóa tài khoản và dữ liệu cá nhân của bạn là vĩnh viễn và không thể hoàn tác. {siteName} sẽ không thể khôi phục tài khoản của bạn hoặc dữ liệu đã bị xóa.',
    description: 'Messaging in the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.text.2': {
    id: 'account.settings.delete.account.modal.text.2',
    defaultMessage: 'Nếu bạn tiếp tục, bạn sẽ không thể sử dụng tài khoản này để học các khóa học trên {siteName}.',
    description: 'Messaging in the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.text.2.edX': {
    id: 'account.settings.delete.account.modal.text.2.edX',
    defaultMessage: 'Nếu bạn tiếp tục, bạn sẽ không thể sử dụng tài khoản này để học các khóa học trên ứng dụng PiStudy',
    description: 'Messaging in the dialog asking user to confirm that they want to delete their entire account',
  },
  'account.settings.delete.account.modal.enter.password': {
    id: 'account.settings.delete.account.modal.enter.password',
    defaultMessage: 'Nếu bạn vẫn muốn tiếp tục và xóa tài khoản của mình, vui lòng nhập mật khẩu tài khoản của bạn:',
    description: 'Asking for the user\'s account password',
  },
  'account.settings.delete.account.modal.confirm.delete': {
    id: 'account.settings.delete.account.modal.confirm.delete',
    defaultMessage: 'Có, xóa',
    description: 'Button label for user to confirm it is okay to delete their account',
  },
  'account.settings.delete.account.modal.confirm.cancel': {
    id: 'account.settings.delete.account.modal.confirm.cancel',
    defaultMessage: 'Hủy',
    description: 'The cancel button on the delete my account modal confirmation',
  },
  'account.settings.delete.account.error.unable.to.delete': {
    id: 'account.settings.delete.account.error.unable.to.delete',
    defaultMessage: 'Không thể xóa tài khoản',
    description: 'Error message when account deletion failed',
  },
  'account.settings.delete.account.error.no.password': {
    id: 'account.settings.delete.account.error.no.password',
    defaultMessage: 'Yêu cầu mật khẩu',
    description: 'Error message when user has not entered their password',
  },
  'account.settings.delete.account.error.invalid.password': {
    id: 'account.settings.delete.account.error.invalid.password',
    defaultMessage: 'Mật khẩu không chính xác',
    description: 'Error message when user has entered incorrect password',
  },
  'account.settings.delete.account.error.unable.to.delete.details': {
    id: 'account.settings.delete.account.error.unable.to.delete.details',
    defaultMessage: 'Xin lỗi, đã xảy ra lỗi khi cố xử lý yêu cầu của bạn. Vui lòng thử lại sau.',
    description: 'Error message when account deletion failed',
  },
  'account.settings.delete.account.modal.after.header': {
    id: 'account.settings.delete.account.modal.after.header',
    defaultMessage: 'Chúng tôi rất tiếc khi thấy bạn rời đi! Tài khoản của bạn sẽ bị xóa trong thời gian ngắn.',
    description: 'Title displayed after user account is deleted',
  },
  'account.settings.delete.account.modal.after.text': {
    id: 'account.settings.delete.account.modal.after.text',
    defaultMessage: 'Việc xóa tài khoản, bao gồm xóa khỏi danh sách email, có thể mất vài tuần để xử lý hoàn toàn thông qua hệ thống của chúng tôi. Nếu bạn muốn từ chối nhận email trước đó, vui lòng hủy đăng ký từ chân trang của bất kỳ email nào.',
    description: 'Text displayed after user account is deleted',
  },
  'account.settings.delete.account.modal.after.button': {
    id: 'account.settings.delete.account.modal.after.button',
    defaultMessage: 'Đóng',
    description: 'Label on button to close a dialog',
  },
});

export default messages;

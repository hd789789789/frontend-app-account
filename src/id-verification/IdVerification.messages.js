import { defineMessages } from "@edx/frontend-platform/i18n";

const messages = defineMessages({
    "id.verification.next": {
        id: "id.verification.next",
        defaultMessage: "Tiếp theo",
        description: "Next button.",
    },
    "id.verification.support": {
        id: "id.verification.support",
        defaultMessage: "hỗ trợ",
        description: "Website support.",
    },
    "id.verification.example.card.alt": {
        id: "id.verification.example.card.alt",
        defaultMessage: "Ví dụ về thẻ căn cước hợp lệ có họ tên đầy đủ và ảnh.",
        description: "Alt text for an example identification card.",
    },
    "id.verification.requirements.title": {
        id: "id.verification.requirements.title",
        defaultMessage: "Yêu cầu xác minh ảnh",
        description: "Title for the Photo Verification Requirements page.",
    },
    "id.verification.requirements.description": {
        id: "id.verification.requirements.description",
        defaultMessage: "Để hoàn thành xác minh ảnh, bạn sẽ cần những thứ sau:",
        description: "Description for the Photo Verification Requirements page.",
    },
    "id.verification.requirements.card.device.title": {
        id: "id.verification.requirements.card.device.title",
        defaultMessage: "Thiết bị có camera",
        description: "Title for the Device with Camera card.",
    },
    "id.verification.requirements.card.device.allow": {
        id: "id.verification.requirements.card.device.allow",
        defaultMessage: "Cho phép",
        description: 'Bold text emphasizing that the user needs to click "allow" in order to enable the camera.',
    },
    "id.verification.requirements.card.id.title": {
        id: "id.verification.requirements.card.id.title",
        defaultMessage: "Thẻ căn cước có ảnh",
        description: "Title for the Photo Identification requirement card.",
    },
    "id.verification.requirements.card.id.text": {
        id: "id.verification.requirements.card.id.text",
        defaultMessage:
            "Bạn cần thẻ căn cước hợp lệ có họ tên đầy đủ và ảnh của bạn, chẳng hạn như bằng lái xe hoặc hộ chiếu.",
        description: "Text that explains that the user needs a photo ID.",
    },
    "id.verification.privacy.title": {
        id: "id.verification.privacy.title",
        defaultMessage: "Thông tin bảo mật",
        description: "Title for Privacy Information.",
    },
    "id.verification.privacy.need.photo.question": {
        id: "id.verification.privacy.need.photo.question",
        defaultMessage: "Tại sao {siteName} cần ảnh của tôi?",
        description: "Question about why the platform needs a verification photo.",
    },
    "id.verification.privacy.need.photo.answer": {
        id: "id.verification.privacy.need.photo.answer",
        defaultMessage:
            "Chúng tôi sử dụng ảnh xác minh của bạn để xác nhận danh tính của bạn và đảm bảo tính hợp lệ của chứng chỉ của bạn.",
        description: "Answering why the platform needs a verification photo.",
    },
    "id.verification.privacy.do.with.photo.question": {
        id: "id.verification.privacy.do.with.photo.question",
        defaultMessage: "{siteName} làm gì với ảnh này?",
        description: "Question about what the platform does with the verification photo.",
    },
    "id.verification.privacy.do.with.photo.answer": {
        id: "id.verification.privacy.do.with.photo.answer",
        defaultMessage:
            "Chúng tôi mã hóa an toàn ảnh của bạn và gửi nó đến dịch vụ ủy quyền của chúng tôi để xem xét. Ảnh và thông tin của bạn không được lưu hoặc hiển thị ở bất kỳ đâu trên {siteName} sau khi quá trình xác minh hoàn tất.",
        description: "Answering what the platform does with the verification photo.",
    },
    "id.verification.access.blocked.title": {
        id: "id.verification.access.blocked.title",
        defaultMessage: "Xác minh danh tính",
        description: "Title for text that displays when a user is blocked from ID verification.",
    },
    "id.verification.access.blocked.enrollment": {
        id: "id.verification.access.blocked.enrollment",
        defaultMessage: "Bạn hiện không ghi danh vào khóa học nào yêu cầu xác minh danh tính.",
        description:
            "Text that displays when user is trying to verify while not enrolled in a course that requires ID verification.",
    },
    "id.verification.access.blocked.pending": {
        id: "id.verification.access.blocked.pending",
        defaultMessage:
            "Bạn đã nộp thông tin xác minh của mình. Bạn sẽ thấy thông báo trên bảng điều khiển của mình khi quá trình xác minh hoàn tất (thường trong vòng 5 ngày).",
        description: "Text that displays when user has a pending or approved request.",
    },
    "id.verification.photo.take": {
        id: "id.verification.photo.take",
        defaultMessage: "Chụp ảnh",
        description: "Button to take photo.",
    },
    "id.verification.photo.retake": {
        id: "id.verification.photo.retake",
        defaultMessage: "Chụp lại ảnh?",
        description: "Button to retake photo.",
    },
    "id.verification.photo.enable.detection": {
        id: "id.verification.photo.enable.detection",
        defaultMessage: "Bật phát hiện khuôn mặt",
        description: "Text label for the checkbox to enable face detection.",
    },
    "id.verification.photo.enable.detection.portrait.help.text": {
        id: "id.verification.photo.enable.detection.portrait.help.text",
        defaultMessage:
            "Nếu được chọn, một khung sẽ xuất hiện xung quanh khuôn mặt của bạn. Khuôn mặt của bạn có thể được nhìn thấy rõ ràng nếu khung xung quanh nó có màu xanh lam. Nếu khuôn mặt của bạn không ở vị trí tốt hoặc không thể phát hiện, khung sẽ có màu đỏ.",
        description: "Help text that appears for enabling face detection on the portrait photo panel.",
    },
    "id.verification.photo.enable.detection.id.help.text": {
        id: "id.verification.photo.enable.detection.id.help.text",
        defaultMessage:
            "Nếu được chọn, một khung sẽ xuất hiện xung quanh khuôn mặt trên thẻ căn cước của bạn. Khuôn mặt có thể được nhìn thấy rõ ràng nếu khung xung quanh nó có màu xanh lam. Nếu khuôn mặt không ở vị trí tốt hoặc không thể phát hiện, khung sẽ có màu đỏ.",
        description: "Help text that appears for enabling face detection on the portrait photo panel.",
    },
    "id.verification.photo.feedback.correct": {
        id: "id.verification.photo.feedback.correct",
        defaultMessage: "Khuôn mặt ở vị trí tốt.",
        description: "Text for screen reader when user's face is in a good position.",
    },
    "id.verification.photo.feedback.two.faces": {
        id: "id.verification.photo.feedback.two.faces",
        defaultMessage: "Phát hiện nhiều hơn một khuôn mặt.",
        description: "Text for screen reader when more than one face detected.",
    },
    "id.verification.photo.feedback.no.faces": {
        id: "id.verification.photo.feedback.no.faces",
        defaultMessage: "Không phát hiện khuôn mặt.",
        description: "Text for screen reader when no face detected.",
    },
    "id.verification.photo.feedback.top.left": {
        id: "id.verification.photo.feedback.top.left",
        defaultMessage: "Vị trí không chính xác. Trên bên trái.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.top.center": {
        id: "id.verification.photo.feedback.top.center",
        defaultMessage: "Vị trí không chính xác. Trên giữa.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.top.right": {
        id: "id.verification.photo.feedback.top.right",
        defaultMessage: "Vị trí không chính xác. Trên bên phải.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.center.left": {
        id: "id.verification.photo.feedback.center.left",
        defaultMessage: "Vị trí không chính xác. Giữa bên trái.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.center.center": {
        id: "id.verification.photo.feedback.center.center",
        defaultMessage: "Vị trí không chính xác. Quá gần camera.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.center.right": {
        id: "id.verification.photo.feedback.center.right",
        defaultMessage: "Vị trí không chính xác. Giữa bên phải.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.bottom.left": {
        id: "id.verification.photo.feedback.bottom.left",
        defaultMessage: "Vị trí không chính xác. Dưới bên trái.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.bottom.center": {
        id: "id.verification.photo.feedback.bottom.center",
        defaultMessage: "Vị trí không chính xác. Dưới giữa.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.photo.feedback.bottom.right": {
        id: "id.verification.photo.feedback.bottom.right",
        defaultMessage: "Vị trí không chính xác. Dưới bên phải.",
        description: "Text for screen reader when face is in a bad position.",
    },
    "id.verification.camera.access.title": {
        id: "id.verification.camera.access.title",
        defaultMessage: "Quyền camera",
        description: "Title for the Camera Access page.",
    },
    "id.verification.camera.access.title.success": {
        id: "id.verification.camera.access.title.success",
        defaultMessage: "Đã bật quyền truy cập camera",
        description: "Title for the Camera Access page when camera is enabled.",
    },
    "id.verification.camera.access.title.failed": {
        id: "id.verification.camera.access.title.failed",
        defaultMessage: "Quyền truy cập camera thất bại",
        description: "Title for the Camera Access page when camera access is denied or unavailable.",
    },
    "id.verification.camera.access.click.allow": {
        id: "id.verification.camera.access.click.allow",
        defaultMessage: 'Vui lòng đảm bảo nhấp vào "Cho phép"',
        description: "Instruction to allow camera access.",
    },
    "id.verification.camera.access.enable": {
        id: "id.verification.camera.access.enable",
        defaultMessage: "Bật camera",
        description: "Text to enable camera.",
    },
    "id.verification.camera.access.problems": {
        id: "id.verification.camera.access.problems",
        defaultMessage: "Gặp vấn đề?",
        description: "Text for when the user is having problems enabling camera access.",
    },
    "id.verification.camera.access.skip": {
        id: "id.verification.camera.access.skip",
        defaultMessage: "Bỏ qua và tải lên tệp ảnh thay thế",
        description: "Text to skip camera access and enable image uploading.",
    },
    "id.verification.camera.access.success": {
        id: "id.verification.camera.access.success",
        defaultMessage: "Có vẻ như camera của bạn đang hoạt động và sẵn sàng.",
        description: "Text to confirm that camera is working.",
    },
    "id.verification.camera.access.failure": {
        id: "id.verification.camera.access.failure",
        defaultMessage:
            "Có vẻ như chúng tôi không thể truy cập camera của bạn. Bạn sẽ cần tải lên tệp ảnh của bạn và giấy tờ tùy thân có ảnh của bạn.",
        description: "Text indicating that the camera could not be accessed and image upload will be enabled.",
    },
    "id.verification.camera.access.failure.temporary": {
        id: "id.verification.camera.access.failure.temporary",
        defaultMessage:
            "Có vẻ như chúng tôi không thể truy cập camera của bạn. Vui lòng xác minh rằng webcam của bạn đã được kết nối và bạn đã cho phép trình duyệt của mình truy cập nó.",
        description: "Text indicating that the camera could not be accessed.",
    },
    "id.verification.camera.access.failure.temporary.chrome": {
        id: "id.verification.camera.access.failure.temporary.chrome",
        defaultMessage: "Để bật quyền truy cập camera trong Chrome:",
        description: "Description for the directions on enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.chrome.step1": {
        id: "id.verification.camera.access.failure.temporary.chrome.step1",
        defaultMessage: "Mở Chrome.",
        description: "Text for step one of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.chrome.step2": {
        id: "id.verification.camera.access.failure.temporary.chrome.step2",
        defaultMessage: "Điều hướng đến Thêm > Cài đặt.",
        description: "Text for step two of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.chrome.step2.windows": {
        id: "id.verification.camera.access.failure.temporary.chrome.step2.windows",
        defaultMessage: "Đối với Windows: Alt+F, Alt+E hoặc F10 theo sau bởi phím cách",
        description: "Text for Windows keyboard shortcut in chrome.",
    },
    "id.verification.camera.access.failure.temporary.chrome.step2.mac": {
        id: "id.verification.camera.access.failure.temporary.chrome.step2.mac",
        defaultMessage: "Đối với Mac: Command+,",
        description: "Text for Mac keyboard shortcut in chrome.",
    },
    "id.verification.camera.access.failure.temporary.chrome.step3": {
        id: "id.verification.camera.access.failure.temporary.chrome.step3",
        defaultMessage: 'Trong tab "Quyền riêng tư và bảo mật", chọn "Cài đặt trang web" và sau đó chọn "Camera".',
        description: "Text for step three of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.chrome.step4": {
        id: "id.verification.camera.access.failure.temporary.chrome.step4",
        defaultMessage: 'Trong "Bị chặn", tìm "edx.org" và chọn nó.',
        description: "Text for step four of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.chrome.step5": {
        id: "id.verification.camera.access.failure.temporary.chrome.step5",
        defaultMessage: 'Trong phần "Quyền", cập nhật quyền camera thành "Cho phép".',
        description: "Text for step five of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.ie11": {
        id: "id.verification.camera.access.failure.temporary.ie11",
        defaultMessage: "Để bật quyền truy cập camera trong Internet Explorer:",
        description: "Description for the directions on enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.ie11.step1": {
        id: "id.verification.camera.access.failure.temporary.ie11.step1",
        defaultMessage:
            "Mở Trình quản lý cài đặt Flash Player bằng cách điều hướng đến Cài đặt Windows > Bảng điều khiển > Flash Player.",
        description: "Text for step one of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.ie11.step2": {
        id: "id.verification.camera.access.failure.temporary.ie11.step2",
        defaultMessage: 'Chọn tab "Camera và Mic", sau đó chọn nút "Cài đặt camera và micrô theo trang web".',
        description: "Text for step two of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.ie11.step3": {
        id: "id.verification.camera.access.failure.temporary.ie11.step3",
        defaultMessage:
            'Chọn "edx.org" từ danh sách các trang web và thay đổi quyền bằng cách chọn "Cho phép" trong menu thả xuống.',
        description: "Text for step three of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox": {
        id: "id.verification.camera.access.failure.temporary.firefox",
        defaultMessage: "Để bật quyền truy cập camera trong Firefox:",
        description: "Description for the directions on enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox.step1": {
        id: "id.verification.camera.access.failure.temporary.firefox.step1",
        defaultMessage: "Mở Firefox.",
        description: "Text for step one of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox.step2": {
        id: "id.verification.camera.access.failure.temporary.firefox.step2",
        defaultMessage: 'Nhập "about:preferences" vào thanh URL.',
        description: "Text for step two of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox.step3": {
        id: "id.verification.camera.access.failure.temporary.firefox.step3",
        defaultMessage: 'Chọn tab "Quyền riêng tư & Bảo mật" và điều hướng đến phần "Quyền".',
        description: "Text for step three of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox.step4": {
        id: "id.verification.camera.access.failure.temporary.firefox.step4",
        defaultMessage: 'Bên cạnh "Camera", chọn nút "Cài đặt…".',
        description: "Text for step four of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox.step5": {
        id: "id.verification.camera.access.failure.temporary.firefox.step5",
        defaultMessage: 'Trong thanh tìm kiếm, nhập "edx.org".',
        description: "Text for step five of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox.step6": {
        id: "id.verification.camera.access.failure.temporary.firefox.step6",
        defaultMessage: 'Trong cột trạng thái cho "edx.org", chọn "Cho phép" từ menu thả xuống.',
        description: "Text for step six of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.firefox.step7": {
        id: "id.verification.camera.access.failure.temporary.firefox.step7",
        defaultMessage: 'Chọn "Lưu thay đổi".',
        description: "Text for step seven of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.safari": {
        id: "id.verification.camera.access.failure.temporary.safari",
        defaultMessage: "Để bật quyền truy cập camera trong Safari:",
        description: "Description for the directions on enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.safari.step1": {
        id: "id.verification.camera.access.failure.temporary.safari.step1",
        defaultMessage: "Mở Safari.",
        description: "Text for step one of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.safari.step2": {
        id: "id.verification.camera.access.failure.temporary.safari.step2",
        defaultMessage:
            'Nhấp vào menu ứng dụng Safari, sau đó chọn "Tùy chọn". Bạn cũng có thể sử dụng Command+, làm phím tắt.',
        description: "Text for step two of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.safari.step3": {
        id: "id.verification.camera.access.failure.temporary.safari.step3",
        defaultMessage: 'Chọn tab "Trang web" và sau đó chọn "Camera".',
        description: "Text for step three of enabling camera access.",
    },
    "id.verification.camera.access.failure.temporary.safari.step4": {
        id: "id.verification.camera.access.failure.temporary.safari.step4",
        defaultMessage: 'Chọn "edx.org" và thay đổi quyền camera thành "Cho phép".',
        description: "Text for step four of enabling camera access.",
    },
    "id.verification.camera.access.failure.unsupported": {
        id: "id.verification.camera.access.failure.unsupported",
        defaultMessage: "Có vẻ như trình duyệt của bạn không hỗ trợ quyền truy cập camera.",
        description: "Text indicating that the user's browser does not support camera access.",
    },
    "id.verification.camera.access.failure.unsupported.chrome.explanation": {
        id: "id.verification.camera.access.failure.unsupported.chrome.explanation",
        defaultMessage:
            "Trình duyệt Chrome hiện không hỗ trợ quyền truy cập camera trên các thiết bị iOS, chẳng hạn như iPhone và iPad.",
        description:
            "Explanation for why certain web browsers, like Chrome, do not support accessing the user's camera.",
    },
    "id.verification.camera.access.failure.unsupported.instructions": {
        id: "id.verification.camera.access.failure.unsupported.instructions",
        defaultMessage: "Vui lòng sử dụng trình duyệt khác để hoàn thành xác minh danh tính.",
        description: "Instructions for the user to user another web browser to complete the process.",
    },
    "id.verification.photo.tips.title": {
        id: "id.verification.photo.tips.title",
        defaultMessage: "Mẹo chụp ảnh hữu ích",
        description: "Title for the Photo Tips page.",
    },
    "id.verification.photo.tips.description": {
        id: "id.verification.photo.tips.description",
        defaultMessage:
            "Tiếp theo, chúng tôi sẽ cần bạn chụp ảnh khuôn mặt của mình. Vui lòng xem lại các mẹo hữu ích bên dưới.",
        description: "Description for the photo tips page.",
    },
    "id.verification.photo.tips.list.title": {
        id: "id.verification.photo.tips.list.title",
        defaultMessage: "Mẹo chụp ảnh",
        description: "Title for the list of photo tips.",
    },
    "id.verification.photo.tips.list.description": {
        id: "id.verification.photo.tips.list.description",
        defaultMessage: "Để chụp ảnh thành công, hãy đảm bảo rằng:",
        description: "Description for the list of photo tips.",
    },
    "id.verification.photo.tips.list.well.lit": {
        id: "id.verification.photo.tips.list.well.lit",
        defaultMessage: "Khuôn mặt của bạn được chiếu sáng tốt.",
        description: "Tip to make sure the user's face is well lit.",
    },
    "id.verification.photo.tips.list.inside.frame": {
        id: "id.verification.photo.tips.list.inside.frame",
        defaultMessage: "Toàn bộ khuôn mặt của bạn vừa khít trong khung.",
        description: "Tip to make sure the user's face fits inside the frame.",
    },
    "id.verification.portrait.photo.title.camera": {
        id: "id.verification.portrait.photo.title.camera",
        defaultMessage: "Chụp ảnh của bản thân",
        description: "Title for the Portrait Photo page if camera access is enabled.",
    },
    "id.verification.portrait.photo.instructions.camera": {
        id: "id.verification.portrait.photo.instructions.camera",
        defaultMessage: "Khi khuôn mặt của bạn ở đúng vị trí, hãy sử dụng nút Chụp ảnh bên dưới để chụp ảnh của bạn.",
        description: "Instructions to use the camera to take a portrait photo..",
    },
    "id.verification.camera.help.sight.question": {
        id: "id.verification.camera.help.sight.question",
        defaultMessage:
            "Nếu tôi không thể xem hình ảnh camera hoặc nếu tôi không thể xem ảnh của mình để xác định mặt nào đang hiển thị thì sao?",
        description: "Question on what to do if the user cannot see the camera image or photo during verification.",
    },
    "id.verification.camera.help.sight.answer.portrait": {
        id: "id.verification.camera.help.sight.answer.portrait",
        defaultMessage:
            "Bạn có thể hoàn thành quy trình chụp ảnh mà không cần hỗ trợ, nhưng có thể mất vài lần nộp để định vị camera đúng. Định vị camera tối ưu thay đổi với mỗi máy tính, nhưng nói chung vị trí tốt nhất cho ảnh chân dung là khoảng 12-18 inch (30-45 cm) từ camera, với đầu của bạn ở giữa so với màn hình máy tính. Nếu các ảnh bạn nộp bị từ chối, hãy thử di chuyển máy tính hoặc định hướng camera để thay đổi góc chiếu sáng.",
        description: "Confirming what to do if the camera image of the portrait cannot be seen during verification.",
    },
    "id.verification.camera.help.sight.answer.id": {
        id: "id.verification.camera.help.sight.answer.id",
        defaultMessage:
            "Bạn có thể hoàn thành quy trình chụp ảnh mà không cần hỗ trợ, nhưng có thể mất vài lần nộp để định vị camera đúng. Định vị camera tối ưu thay đổi với mỗi máy tính, nhưng nói chung, vị trí tốt nhất cho ảnh thẻ căn cước là 8-12 inch (20-30 cm) từ camera, với thẻ căn cước ở giữa so với camera. Nếu các ảnh bạn nộp bị từ chối, hãy thử di chuyển máy tính hoặc định hướng camera để thay đổi góc chiếu sáng. Lý do phổ biến nhất để bị từ chối là không thể đọc được chữ trên thẻ căn cước.",
        description: "Confirming what to do if the camera image of the ID cannot be seen during verification.",
    },
    "id.verification.camera.help.difficulty.question.portrait": {
        id: "id.verification.camera.help.difficulty.question.portrait",
        defaultMessage: "Nếu tôi gặp khó khăn khi giữ đầu ở vị trí tương đối với camera thì sao?",
        description: "Question on what to do if the user has difficulty holding their head relative to the camera.",
    },
    "id.verification.camera.help.difficulty.question.id": {
        id: "id.verification.camera.help.difficulty.question.id",
        defaultMessage: "Nếu tôi gặp khó khăn khi giữ giấy tờ tùy thân ở vị trí tương đối với camera thì sao?",
        description: "Question on what to do if the user has difficulty holding their ID relative to the camera.",
    },
    "id.verification.camera.help.difficulty.answer": {
        id: "id.verification.camera.help.difficulty.answer",
        defaultMessage:
            "Nếu bạn cần hỗ trợ chụp ảnh để nộp, hãy liên hệ với bộ phận hỗ trợ {siteName} để biết thêm gợi ý.",
        description: "Confirming what to do if the user has difficult holding their head relative to the camera.",
    },
    "id.verification.id.photo.unclear.question": {
        id: "id.verification.id.photo.unclear.question",
        defaultMessage: "Hình ảnh thẻ căn cước của bạn không rõ hoặc quá mờ?",
        description: "Question on what to do if the user's ID image is unclear",
    },
    "id.verification.id.tips.title": {
        id: "id.verification.id.tips.title",
        defaultMessage: "Mẹo thẻ căn cước hữu ích",
        description: "Title for the ID Tips page.",
    },
    "id.verification.id.tips.description": {
        id: "id.verification.id.tips.description",
        defaultMessage:
            "Tiếp theo, chúng tôi sẽ cần bạn chụp ảnh thẻ căn cước hợp lệ bao gồm họ tên đầy đủ và ảnh của bạn, chẳng hạn như bằng lái xe hoặc hộ chiếu. Vui lòng chuẩn bị sẵn giấy tờ tùy thân của bạn.",
        description: "Description for the ID Tips page.",
    },
    "id.verification.id.tips.list.well.lit": {
        id: "id.verification.id.tips.list.well.lit",
        defaultMessage: "Thẻ căn cước của bạn được chiếu sáng tốt.",
        description: "Tip to ensure ID is well lit.",
    },
    "id.verification.id.tips.list.clear": {
        id: "id.verification.id.tips.list.clear",
        defaultMessage: "Đảm bảo rằng bạn có thể nhìn thấy ảnh của mình và đọc rõ tên của mình.",
        description: "Tip to ensure ID and name can be seen clearly.",
    },
    "id.verification.id.photo.title.camera": {
        id: "id.verification.id.photo.title.camera",
        defaultMessage: "Chụp ảnh thẻ căn cước của bạn",
        description: "Title for the ID Photo page if camera access is enabled.",
    },
    "id.verification.id.photo.title.upload": {
        id: "id.verification.id.photo.title.upload",
        defaultMessage: "Tải lên ảnh thẻ căn cước của bạn",
        description: "Title for the ID Photo page if camera access is disabled.",
    },
    "id.verification.id.photo.preview.alt": {
        id: "id.verification.id.photo.preview.alt",
        defaultMessage: "Xem trước ảnh giấy tờ tùy thân.",
        description: "Alt text for the ID photo preview.",
    },
    "id.verification.id.photo.instructions.camera": {
        id: "id.verification.id.photo.instructions.camera",
        defaultMessage:
            "Khi giấy tờ tùy thân của bạn ở đúng vị trí, hãy sử dụng nút Chụp ảnh bên dưới để chụp ảnh của bạn. Vui lòng sử dụng hộ chiếu, bằng lái xe hoặc thẻ căn cước khác bao gồm họ tên đầy đủ và ảnh khuôn mặt của bạn.",
        description: "Instructions to use the camera to take an ID photo.",
    },
    "id.verification.id.photo.instructions.upload": {
        id: "id.verification.id.photo.instructions.upload",
        defaultMessage:
            "Vui lòng tải lên ảnh thẻ căn cước của bạn. Đảm bảo toàn bộ giấy tờ tùy thân vừa khít trong khung và được chiếu sáng tốt. Kích thước tệp phải dưới 10 MB. Định dạng được hỗ trợ:",
        description: "Instructions for ID photo upload.",
    },
    "id.verification.id.photo.instructions.upload.error.invalidFileType": {
        id: "id.verification.id.photo.instructions.upload.error.invalidFileType",
        defaultMessage: "Tệp bạn đã chọn không phải là loại ảnh được hỗ trợ. Vui lòng chọn từ các định dạng sau:",
        description: "Error message for file upload that is not a supported image type.",
    },
    "id.verification.id.photo.instructions.upload.error.fileTooLarge": {
        id: "id.verification.id.photo.instructions.upload.error.fileTooLarge",
        defaultMessage: "Tệp bạn đã chọn quá lớn. Vui lòng thử lại với tệp nhỏ hơn 10MB.",
        description: "Error message for file upload that is larger than 10MB.",
    },
    "id.verification.name.check.title": {
        id: "id.verification.name.check.title",
        defaultMessage: "Kiểm tra lại tên của bạn",
        description: "Title for the page where a user double-checks that their name is correct.",
    },
    "id.verification.name.check.instructions": {
        id: "id.verification.name.check.instructions",
        defaultMessage:
            "Tên bên dưới có khớp với tên trên giấy tờ tùy thân có ảnh của bạn không? Nếu không, hãy cập nhật tên bên dưới để khớp với giấy tờ tùy thân có ảnh của bạn.",
        description:
            "Text to instruct the user to check that the name displayed on the page matches what is on their photo ID.",
    },
    "id.verification.name.check.mismatch.information": {
        id: "id.verification.name.check.mismatch.information",
        defaultMessage:
            "Nếu tên bên dưới không khớp với giấy tờ tùy thân có ảnh của bạn, xác minh danh tính của bạn sẽ bị từ chối.",
        description:
            "Text to inform the user that if the name displayed on the page does not match what is on their photo ID, identity verification will be denied.",
    },
    "id.verification.name.error": {
        id: "id.verification.name.error",
        defaultMessage: "Vui lòng nhập tên của bạn như xuất hiện trên giấy tờ tùy thân có ảnh của bạn.",
        description: "Error that shows when the user needs to update their name to match the name on their ID.",
    },
    "id.verification.account.name.warning.prefix": {
        id: "id.verification.account.name.warning.prefix",
        defaultMessage: "Xin lưu ý:",
        description: "Prefix to the warning that any change to the account name will be saved to the account.",
    },
    "id.verification.account.name.settings": {
        id: "id.verification.account.name.settings",
        defaultMessage: "Cài đặt tài khoản",
        description: "Link to Account Settings.",
    },
    "id.verification.name.label": {
        id: "id.verification.name.label",
        defaultMessage: "Tên",
        description: "Label for name input.",
    },
    "id.verification.account.name.photo.alt": {
        id: "id.verification.account.name.photo.alt",
        defaultMessage: "Ảnh giấy tờ tùy thân của bạn sẽ được nộp.",
        description: "Alt text for the photo of the user's ID.",
    },
    "id.verification.review.title": {
        id: "id.verification.review.title",
        defaultMessage: "Xem lại ảnh của bạn",
        description: "Title for the review your photos page.",
    },
    "id.verification.review.description": {
        id: "id.verification.review.description",
        defaultMessage:
            "Đảm bảo chúng tôi có thể xác minh danh tính của bạn bằng các ảnh và thông tin bạn đã cung cấp.",
        description: "Description for the review your photos page.",
    },
    "id.verification.review.portrait.label": {
        id: "id.verification.review.portrait.label",
        defaultMessage: "Chân dung của bạn",
        description: "Label for the portrait card.",
    },
    "id.verification.review.portrait.alt": {
        id: "id.verification.review.portrait.alt",
        defaultMessage: "Ảnh khuôn mặt của bạn sẽ được nộp.",
        description: "Alt text for the portrait photo.",
    },
    "id.verification.review.portrait.retake": {
        id: "id.verification.review.portrait.retake",
        defaultMessage: "Chụp lại ảnh chân dung",
        description: "Button to retake the portrait photo.",
    },
    "id.verification.review.id.label": {
        id: "id.verification.review.id.label",
        defaultMessage: "Thẻ căn cước của bạn",
        description: "Label for the Photo ID card.",
    },
    "id.verification.review.id.alt": {
        id: "id.verification.review.id.alt",
        defaultMessage: "Ảnh thẻ căn cước của bạn sẽ được nộp.",
        description: "Alt text for the ID photo.",
    },
    "id.verification.review.id.retake": {
        id: "id.verification.review.id.retake",
        defaultMessage: "Chụp lại ảnh giấy tờ tùy thân",
        description: "Button to retake the ID photo.",
    },
    "id.verification.review.confirm": {
        id: "id.verification.review.confirm",
        defaultMessage: "Nộp",
        description: "Button to confirm all information is correct and submit.",
    },
    "id.verification.submission.alert.error.face": {
        id: "id.verification.submission.alert.error.face",
        defaultMessage: "Yêu cầu ảnh khuôn mặt của bạn. Vui lòng chụp lại ảnh chân dung của bạn.",
        description: "Error message displayed when the user's portrait photo is missing.",
    },
    "id.verification.submission.alert.error.id": {
        id: "id.verification.submission.alert.error.id",
        defaultMessage: "Yêu cầu ảnh thẻ căn cước của bạn. Vui lòng chụp lại ảnh giấy tờ tùy thân của bạn.",
        description: "Error message displayed when the user's ID photo is missing.",
    },
    "id.verification.submission.alert.error.name": {
        id: "id.verification.submission.alert.error.name",
        defaultMessage:
            "Yêu cầu tên tài khoản hợp lệ. Vui lòng cập nhật tên tài khoản của bạn để khớp với tên trên giấy tờ tùy thân của bạn.",
        description: "Error message displayed when the user's account name is missing.",
    },
    "id.verification.submission.alert.error.unsupported": {
        id: "id.verification.submission.alert.error.unsupported",
        defaultMessage:
            "Một hoặc nhiều tệp bạn đã tải lên có định dạng không được hỗ trợ. Vui lòng chọn từ các định dạng sau:",
        description: "Error message displayed when the user uploads an unsupported file type.",
    },
    "id.verification.review.error": {
        id: "id.verification.review.error",
        defaultMessage: "Trang hỗ trợ {siteName}",
        description: "Text linking to the platform support page.",
    },
    "id.verification.submitted.title": {
        id: "id.verification.submitted.title",
        defaultMessage: "Đang xác minh danh tính",
        description: "Title for the submitted page.",
    },
    "id.verification.submitted.text": {
        id: "id.verification.submitted.text",
        defaultMessage:
            "Chúng tôi đã nhận được thông tin của bạn và đang xác minh danh tính của bạn. Bạn sẽ được thông báo khi quá trình xác minh hoàn tất (thường trong vòng 5 ngày). Trong thời gian chờ đợi, bạn vẫn có thể truy cập tất cả nội dung khóa học có sẵn.",
        description: "Text confirming that ID verification request has been received.",
    },
    "id.verification.return.dashboard": {
        id: "id.verification.return.dashboard",
        defaultMessage: "Quay lại bảng điều khiển của bạn",
        description: "Button to return to the dashboard.",
    },
    "id.verification.return.course": {
        id: "id.verification.return.course",
        defaultMessage: "Quay lại khóa học",
        description: "Return to the course which ID verification was accessed from.",
    },
    "id.verification.return.generic": {
        id: "id.verification.return.generic",
        defaultMessage: "Quay lại",
        description: "Button to return to the user's original location.",
    },
    "id.verification.photo.upload.help.title": {
        id: "id.verification.photo.upload.help.title",
        defaultMessage: "Tải lên ảnh thay thế",
        description: "Title for section that allows switching to photo upload mode.",
    },
    "id.verification.photo.camera.help.title": {
        id: "id.verification.photo.camera.help.title",
        defaultMessage: "Sử dụng camera của bạn thay thế",
        description: "Title for section that allows switching to camera mode.",
    },
    "id.verification.photo.upload.help.text": {
        id: "id.verification.photo.upload.help.text",
        defaultMessage:
            "Nếu bạn gặp sự cố khi sử dụng tính năng chụp ảnh ở trên, bạn có thể muốn tải lên ảnh thay thế. Để tải lên ảnh, hãy nhấp vào nút bên dưới.",
        description: "Help text for switching to upload mode.",
    },
    "id.verification.photo.camera.help.text": {
        id: "id.verification.photo.camera.help.text",
        defaultMessage:
            "Nếu bạn gặp sự cố khi tải lên ảnh ở trên, bạn có thể muốn sử dụng camera của mình thay thế. Để sử dụng camera, hãy nhấp vào nút bên dưới.",
        description: "Help text for switching to camera mode.",
    },
    "id.verification.photo.upload.help.button": {
        id: "id.verification.upload.help.button",
        defaultMessage: "Chuyển sang chế độ tải lên",
        description: "Button used to switch to upload mode.",
    },
    "id.verification.photo.camera.help.button": {
        id: "id.verification.camera.help.button",
        defaultMessage: "Chuyển sang chế độ camera",
        description: "Button used to switch to camera mode.",
    },
});

export default messages;

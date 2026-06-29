# Hướng dẫn lưu ảnh vào dự án

## 📁 Cấu trúc thư mục ảnh
Bạn cần lưu ảnh vào thư mục: `public/images/`

## 📸 Danh sách ảnh cần lưu

### 1. Welcome Screen (Concept 1)
- **Tên file**: `hoian-flowers.jpg` (hoặc `.png`)
- **Ảnh**: Hoa giấy hoặc chi tiết hoa từ ảnh phố Hội An
- **Kích thước gợi ý**: Vuông hoặc gần vuông (300x400px)
- **Số lượng**: Lưu 1 file (sẽ được dùng cho cả 2 sticker trái và phải)
- **Vị trí trên trang**: Sẽ xuất hiện ở hai bên (trái + phải)

### 2. Love Meter Screen (Concept 2)
- **Tên file**: `pine-forest-1.jpg` 
  - **Ảnh**: Ảnh cô bạn ở rừng thông (ảnh chính, ở giữa)
  - **Kích thước**: Vuông (300x300px) — sẽ được crop thành hình tròn
  - **Vị trí**: Giữa màn hình, ở trong hình tròn trắng

- **Tên file**: `pine-forest-2.jpg`
  - **Ảnh**: Ảnh cô bạn pose khác hoặc góc khác
  - **Kích thước**: Hình chữ nhật (200x280px)
  - **Vị trí**: Bên trái màn hình

- **Tên file**: `pine-forest-3.jpg`
  - **Ảnh**: Ảnh cô bạn pose khác hoặc góc khác
  - **Kích thước**: Hình chữ nhật (200x280px)
  - **Vị trí**: Bên phải màn hình

### 3. Reasons Screen (Concept 2.5)
Dùng lại ảnh từ trên + ảnh hoa:
- **Tên file**: `hoian-flowers.jpg` (dùng lại)
  - **Vị trí**: Góc trên bên trái, mờ nhạt

- **Tên file**: `flower-bouquet-1.jpg` 
  - **Ảnh**: Ảnh bó hoa (ảnh chính)
  - **Vị trí**: Góc dưới bên phải, mờ nhạt

### 4. Reward Screen (Concept 3)
- **Tên file**: `flower-bouquet-1.jpg` (dùng lại)
  - **Ảnh**: Bó hoa hồng + lá xanh (ảnh lớn ở giữa)
  - **Kích thước**: Vuông (300x300px)
  - **Vị trí**: Giữa màn hình

- **Tên file**: `flower-bouquet-2.jpg`
  - **Ảnh**: Bó hoa hoặc chi tiết hoa
  - **Kích thước**: Hình chữ nhật (200x280px)
  - **Vị trí**: Góc trên bên phải

- **Tên file**: `flower-bouquet-3.jpg`
  - **Ảnh**: Bó hoa hoặc chi tiết hoa khác
  - **Kích thước**: Hình chữ nhật (200x280px)
  - **Vị trí**: Góc dưới bên trái

## 🎯 Tóm tắt file cần lưu

| Tên file | Dùng cho | Ghi chú |
|---------|---------|--------|
| `hoian-flowers.jpg` | Welcome + Reasons | Hoa giấy |
| `pine-forest-1.jpg` | Love Meter | Ảnh cô bạn (chính, ở giữa) |
| `pine-forest-2.jpg` | Love Meter | Ảnh cô bạn (bên trái) |
| `pine-forest-3.jpg` | Love Meter | Ảnh cô bạn (bên phải) |
| `flower-bouquet-1.jpg` | Reward + Reasons | Bó hoa chính |
| `flower-bouquet-2.jpg` | Reward | Hoa (góc phải) |
| `flower-bouquet-3.jpg` | Reward | Hoa (góc trái) |

## 📝 Hướng dẫn lưu file

1. **Tạo thư mục** (nếu chưa có):
   - Đường dẫn: `public/images/`

2. **Copy ảnh vào**:
   - Lưu ảnh bạn gửi với đúng tên file từ bảng trên
   - Đảm bảo là định dạng `.jpg` hoặc `.png`

3. **Xác minh**:
   - Kiểm tra lại tên file không có khoảng trắng hoặc ký tự đặc biệt
   - Các ảnh sẽ tự động load khi bạn chạy ứng dụng

## 🎨 Gợi ý chỉnh sửa ảnh (nếu cần)
- **Welcome**: Cắt lấy phần hoa giấy màu hồng
- **Love Meter**: Cắt ảnh cô bạn thành vuông hoặc hình chữ nhật
- **Reward**: Cắt ảnh bó hoa thành vuông cho ảnh chính

## ✅ Kiểm tra sau khi lưu
1. Chạy ứng dụng: `npm run dev`
2. Kiểm tra từng màn hình xem ảnh đã hiện chưa
3. Nếu ảnh không hiện, kiểm tra:
   - Tên file có chính xác không?
   - File có tồn tại trong `public/images/` không?
   - Có lỗi console trong DevTools không?

---

**Ghi chú**: Nếu bạn có ảnh khác hoặc muốn thay đổi kích thước, cứ gửi cho mình nhé! Mình sẽ cập nhật code cho phù hợp.

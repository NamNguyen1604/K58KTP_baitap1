# K58KTP_baitap1
Nội dung bài tập 1 : TÌM HIỂU CÁC PHƯƠNG PHÁP MÃ HOÁ CỔ ĐIỂN

Caesar
Affine
Hoán vị
Vigenère
Playfair
** Với mỗi phương pháp, hãy tìm hiểu:**

Tên gọi
Thuật toán mã hoá, thuật toán giải mã
Không gian khóa
Cách phá mã (mà không cần khoá)
Cài đặt thuật toán mã hoá và giải mã bằng code C++ và bằng html+css+javascript

Bài làm : 
1.Afine
Tên gọi : Affine Cipher là một dạng mã hóa thay thế đơn bảng (monoalphabetic substitution cipher), tức là mỗi ký tự trong bản rõ (plaintext) sẽ được ánh xạ thành một ký tự khác trong bản mã (ciphertext) theo một công thức toán học. Nó được xem là sự mở rộng của Caesar Cipher (vốn chỉ là phép dịch chuyển đơn giản).

Thuật toán mã hoá: C = (P + k) mod 26

Thuật toán giải mã: P = (C − k) mod 26

Không gian khóa: 26 khả năng (0 - 25)

Cách phá mã (mà không cần khoá): Không gian khóa có 26 khả năng => thử 26 khả năng

Kết quả mã hóa và giải mã ( hình ảnh):
HTML, JS, CSS
Mã hoá : 
<img width="666" height="796" alt="image" src="https://github.com/user-attachments/assets/1343814c-6ca4-4643-8182-aea17595de81" />
Giải mã : 
<img width="667" height="894" alt="image" src="https://github.com/user-attachments/assets/ee85e88c-00f8-4720-b842-d7926812cbf0" />

2. Caesar
Tên gọi : Caesar Cipher là một trong những phương pháp mã hóa cổ điển đơn giản nhất, được Julius Caesar (La Mã cổ đại) sử dụng để trao đổi thông tin quân sự. Đây là dạng mã hóa thay thế đơn bảng (monoalphabetic substitution cipher), trong đó mỗi ký tự trong bản rõ (plaintext) được thay thế bằng một ký tự khác trong bảng chữ cái theo một số bước dịch chuyển cố định

Thuật toán mã hoá: C = (P + k) mod 26

Thuật toán giải mã: P = (C − k) mod 26

Không gian khóa: 26 khả năng (0 - 25)

Cách phá mã (mà không cần khoá): Không gian khóa có 26 khả năng => thử 26 khả năng

Mã hóa và giải mã:

HTML,CSS,JS
Mã hoá : 
<img width="697" height="808" alt="image" src="https://github.com/user-attachments/assets/c7c8168c-24bb-4a5e-bdae-4c2f47dcb643" />
Giải mã :
<img width="700" height="810" alt="image" src="https://github.com/user-attachments/assets/4efebdf2-ce85-42fa-ba12-e30a699b30c1" />

3. Hoán Vị:
Tên gọi : Hoán vị (Transposition cipher) còn gọi là mã hoán vị, mã tráo vị trí.

Ý tưởng: Giữ nguyên các ký tự (tần suất, ký tự không thay đổi) nhưng thay đổi vị trí của chúng theo một quy tắc (permute). Kết quả là một hoán vị của bản rõ — chữ cái không bị thay thế, chỉ bị tráo chỗ.

Các dạng phổ biến:

Columnar transposition (chuyển cột) — xếp văn bản theo hàng vào một bảng có số cột dựa trên khóa dạng từ/chuỗi, rồi đọc theo thứ tự cột được sắp xếp theo khóa.

Route transposition — viết vào lưới theo một “lộ trình” (row-major, spiral, zig-zag...) rồi đọc theo một lộ trình khác.

General block permutation — chia thành khối cố định kích thước n, áp dụng một hoán vị perm của n ký tự trong mỗi khối.

Thuật toán mã hoá: C = (P + k) mod 26

Thuật toán giải mã: P = (C − k) mod 26

Không gian khóa: 26 khả năng (0 - 25)

Cách phá mã (mà không cần khoá): Không gian khóa có 26 khả năng => thử 26 khả năng

Mã hóa và giải mã:

HTML,CSS,JS
Mã hoá : 
<img width="712" height="884" alt="image" src="https://github.com/user-attachments/assets/f6da6bc3-bb90-452b-b4eb-8dfb9d4455d9" />
Giải mã :  
<img width="777" height="888" alt="image" src="https://github.com/user-attachments/assets/35bf9ecc-cbe2-4fe1-a5b4-9ebd6328e57c" />

4. Vigenère
Tên gọi : Vigenère Cipher là một phương pháp mã hóa cổ điển thuộc nhóm đa bảng (polyalphabetic cipher). Nó được Blaise de Vigenère giới thiệu vào thế kỷ 16. Điểm mạnh của Vigenère Cipher so với các phương pháp đơn bảng là sử dụng một khóa (key) gồm nhiều ký tự, giúp tăng tính bảo mật.

Thuật toán giải mã: Pi ​= (Ci​ − Kj​) mod 26

Không gian khóa: Nếu khóa độ dài L và mỗi ký tự 26 khả năng, keyspace = 26 𝐿 26 L . Thực tế tìm khóa bằng Kasiski/Friedman nếu L nhỏ

Cách phá mã (mà không cần khoá):

Kasiski examination để tìm độ dài khóa

Sau khi biết độ dài, tách thành L chuỗi và dùng phân tích tần suất cho từng chuỗi

Friedman test ước lượng độ dài khóa

Mã hóa và giải mã:

HTML,CSS,JS

Mã hóa:
<img width="700" height="850" alt="image" src="https://github.com/user-attachments/assets/da481006-8d1f-461a-878a-078a98f11f41" />

Giải mã:
<img width="749" height="841" alt="image" src="https://github.com/user-attachments/assets/9cbd164a-b0a9-4157-b6ff-5f0aecffd186" />


5. PlayFair
Tên học : Playfair cipher được Charles Wheatstone phát minh năm 1854, nhưng được đặt theo tên của Lord Playfair (người đã quảng bá nó). Đây là một trong những mã khối (block cipher) cổ điển, hoạt động trên cặp chữ cái (digraphs) thay vì từng chữ cái riêng lẻ.
So với Caesar hay Affine (mã hóa trên từng ký tự), Playfair an toàn hơn vì khó phân tích tần suất.

Thuật toán mã hoá:

Tạo ma trận 5×5 từ khóa (loại bỏ ký tự trùng, gộp I/J)

Chuẩn bị bản rõ: loại bỏ ký tự không chữ, thay J→I, chia thành cặp, nếu hai ký tự giống nhau chèn 'X' vào giữa, nếu lẻ thêm 'X'

Mã hóa mỗi cặp:

Nếu cùng hàng: thay mỗi chữ bằng chữ bên phải (vòng trở lại)

Nếu cùng cột: thay bằng chữ bên dưới

Nếu khác hàng và khác cột: thay bằng các chữ ở cùng hàng nhưng hoán cột (rectangle)

Thuật toán giải mã: ngược lại (trái / trên / rectangle)

Không gian khóa: Khóa là chuỗi ký tự, ma trận 5×5 có 25! / ? — nhưng thực tế không gian khóa hữu hạn lớn; tuy nhiên Playfair không an toàn trước máy tính hiện đại

Cách phá mã (mà không cần khoá): Phân tích bigram, tấn công bằng tần suất theo cặp, hoặc brute-force trên không gian khóa nhỏ (khó). Tấn công hiện đại sử dụng mô hình đánh giá điểm (hill climbing).

Mã hóa và giải mã:
Mã hóa:
<img width="706" height="865" alt="image" src="https://github.com/user-attachments/assets/8df39b7e-a9cb-44ba-a8e4-edcedf2ff4d0" />
Giải mã:
<img width="774" height="913" alt="image" src="https://github.com/user-attachments/assets/a2a139e2-4203-4b6f-9f2f-912959f95d0c" />


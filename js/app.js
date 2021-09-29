function openTab(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function loadNames() {
    const amount = document.getElementById('quantity').value;
    var Ho = [
        "Nguyễn",
        "Trần",
        "Lê",
        "Phạm",
        "Hoàng",
        "Huỳnh",
        "Phan",
        "Vũ",
        "Võ",
        "Đặng",
        "Bùi",
        "Đỗ",
        "Hồ",
        "Ngô",
        "Dương",
        "Lý",
        "An",
        "Anh",
        "Ao",
        "Ánh",
        "Ân",
        "Âu Dương",
        "Ấu",
        "Bá",
        "Bạc",
        "Bạch",
        "Bàn",
        "Bàng",
        "Bành",
        "Bảo",
        "Bế",
        "Bì",
        "Biện",
        "Bình",
        "Bồ",
        "Chriêng",
        "Ca",
        "Cà",
        "Cái",
        "Cai",
        "Cam",
        "Cảnh",
        "Cao",
        "Cáp",
        "Cát",
        "Cầm",
        "Cấn",
        "Chế",
        "Chiêm",
        "Chu",
        "Châu",
        "Chung",
        "Chúng",
        "Chương",
        "Chử",
        "Cồ",
        "Cổ",
        "Công",
        "Cống",
        "Cung",
        "Cù",
        "Cự",
        "Dã",
        "Danh",
        "Diêm",
        "Diệp",
        "Doãn",
        "Duy",
        "Dư",
        "Đắc",
        "Đái",
        "Điều",
        "Đan",
        "Đàm",
        "Đào",
        "Đầu",
        "Đậu",
        "Đèo",
        "Điền",
        "Đình",
        "Đinh",
        "Điêu",
        "Đoàn",
        "Đoạn",
        "Đôn",
        "Đống",
        "Đồ",
        "Đồng",
        "Đổng",
        "Đới",
        "Đương",
        "Đường",
        "Đức",
        "Đăng",
        "Giả",
        "Giao",
        "Giang",
        "Giảng",
        "Giáp",
        "H'",
        "H'ma",
        "H'nia",
        "Hầu",
        "Hà",
        "Hạ",
        "Hàn",
        "Hàng",
        "Hán",
        "Hề",
        "Hi",
        "Hình",
        "Hoa",
        "Hoà",
        "Hồng",
        "Hùng",
        "Hứa",
        "Hướng",
        "Kông",
        "Kiểu",
        "Kha",
        "Khà",
        "Khương",
        "Khâu",
        "Khiếu",
        "Khoa",
        "Khổng",
        "Khu",
        "Khuất",
        "Khúc",
        "Khưu",
        "Kiều",
        "Kim",
        "Khai",
        "Lyly",
        "La",
        "Lã",
        "Lãnh",
        "Lạc",
        "Lại",
        "Lăng",
        "Lâm",
        "Lèng",
        "Lều",
        "Liên",
        "Liêu",
        "Liễu",
        "Linh",
        "Lò",
        "Lô",
        "Lỗ",
        "Lộ",
        "Luyện",
        "Lục",
        "Lư",
        "Lương",
        "Lường",
        "Lưu",
        "Lý",
        "Mùa",
        "Ma",
        "Mai",
        "Mang",
        "Mã",
        "Mạc",
        "Mạch",
        "Mạnh",
        "Mâu",
        "Mầu",
        "Mẫn",
        "Mộc",
        "Mục",
        "Ngạc",
        "Nhan",
        "Ninh",
        "Nhâm",
        "Ngân",
        "Nghiêm",
        "Nghị",
        "Ngọ",
        "Ngọc",
        "Ngôn",
        "Ngũ",
        "Ngụy",
        "Nhữ",
        "Nông",
        "Ong",
        "Ông",
        "Phi",
        "Phí",
        "Phó",
        "Phong",
        "Phù",
        "Phú",
        "Phùng",
        "Phương",
        "Quản",
        "Quán",
        "Quang",
        "Quàng",
        "Quảng",
        "Quách",
        "Sái",
        "Sầm",
        "Sơn",
        "Sử",
        "Sùng",
        "Tán",
        "Tào",
        "Tạ",
        "Tăng",
        "Tấn",
        "Tề",
        "Thang",
        "Thái",
        "Thành",
        "Thào",
        "Thạch",
        "Thân",
        "Thẩm",
        "Thập",
        "Thế",
        "Thi",
        "Thiều",
        "Thịnh",
        "Thoa",
        "Thôi",
        "Thục",
        "Tiêu",
        "Tiếp",
        "Tinh",
        "Tòng",
        "Tô",
        "Tôn",
        "Tôn Thất",
        "Tông",
        "Tống",
        "Trang",
        "Trác",
        "Trà",
        "Tri",
        "Triệu",
        "Trình",
        "Trịnh",
        "Trưng",
        "Trương",
        "Tuấn",
        "Từ",
        "Ty",
        "Uông",
        "Ung",
        "Ưng",
        "Ứng",
        "Vạn",
        "Văn",
        "Vi",
        "Viêm",
        "Viên",
        "Vòng",
        "Vương",
        "Vưu",
        "Xa",
        "Xung",
        "Yên",
        "Dzoãn",
    ];

    var Dem = [
        "Quốc",
        "Đăng",
        "Phúc",
        "Ngọc",
        "Văn",
        "Phong",
        "Ngọc",
        "Hữu",
        "Thị",
        "Chí",
        "Minh",
        "An",
        "Khánh",
        "Hải",
        "Gia",
        "Bảo",
        "Tùng",
        "Mạnh",
        "Hiền",
        "Khang",
        "Khôi",
        "Thành",
        "Trung",
        "Tài",
        "Đức",
        "Thiên",
        "Trọng",
        "Thanh",
        "Thái",
        "Loan",
        "Dũng",
        "Phương",
        "Tuấn",
        "Tâm",
        "Tú",
        "Xương",
        "Đạo",
        "Hưng",
        "Phương Văn",
        "Cảnh",
        "Công",
        "Toản",
        "Quý Ly",
        "Nguyên Trừng",
        "Lợi",
        "Tư Thành",
        "Dung",
        "Doanh",
        "Kiểm",
        "Hoàng",
        "Ánh",
        "Vĩnh San",
        "Thuyết",
        "Tôn",
        "Tùng",
        "Ngọc",
        "Đức Thắng",
        "Tuân",
        "Tường",
        "Tài Em",
        "Hồng Duy",
        "Hồng",
        "Duy",
        "Toàn",
        "Trường",
        "Sơn",
        "Trường Sơn",
        "Đông",
        "Đông Triều",
        "Việt",
        "Công",
        "Anh",
        "Toàn",
        "Thái",
        "Thái Quý",
        "Quý",
        "Việt Anh",
        "Lâm",
        "Gấm",
        "Hương",
        "Hường",
        "Ánh",
        "Trắc",
        "Chân",
        "Trinh",
        "Thiên Hinh",
        "Ngọc Bảo",
        "Xuân",
        "Xuân Hương",
        "Mai",
        "My",
        "Huyền",
        "Mỹ Dạ",
        "Vỹ",
        "Vĩ",
        "Long",
        "Ninh",
        "Vân",
        "Cẩm Vân",
        "Vân",
        "Ánh Viên",
        "Diễm",
        "Diễm Phúc",
        "Diệu",
    ];


    var Ten = [
        "Quốc",
        "Đăng",
        "Phúc",
        "Ngọc",
        "Văn",
        "Phong",
        "Ngọc",
        "Hữu",
        "Quyền",
        "Quang Phục",
        "Bộ Lĩnh",
        "Hoàn",
        "Chí",
        "Minh",
        "An",
        "Khánh",
        "Hải",
        "Gia",
        "Bảo",
        "Tùng",
        "Mạnh",
        "Hiền",
        "Khang",
        "Khôi",
        "Thành",
        "Trung",
        "Tài",
        "Đức",
        "Thiên",
        "Trọng",
        "Thanh",
        "Thái",
        "Loan",
        "Dũng",
        "Phương",
        "Tuấn",
        "Tú",
        "Xương",
        "Tâm",
        "Quang",
        "Hoàn",
        "Hoan",
        "Công Uẩn",
        "Đạo",
        "Hưng",
        "Cảnh",
        "Công",
        "Toản",
        "Quý Ly",
        "Nguyên Trừng",
        "Lợi",
        "Tư Thành",
        "Dung",
        "Doanh",
        "Kiểm",
        "Hoàng",
        "Ánh",
        "Vĩnh San",
        "Thuyết",
        "Tôn",
        "Tùng",
        "Ngọc",
        "Đức Thắng",
        "Tuân",
        "Tường",
        "Tài Em",
        "Hồng Duy",
        "Hồng",
        "Duy",
        "Toàn",
        "Trường",
        "Sơn",
        "Trường Sơn",
        "Đông",
        "Đông Triều",
        "Việt",
        "Công",
        "Anh",
        "Toàn",
        "Thái",
        "Thái Quý",
        "Quý",
        "Việt Anh",
        "Lâm",
        "Gấm",
        "Hương",
        "Hường",
        "Ánh",
        "Trắc",
        "Chân",
        "Trinh",
        "Thiên Hinh",
        "Ngọc Bảo",
        "Xuân",
        "Xuân Hương",
        "Mai",
        "My",
        "Huyền",
        "Mỹ Dạ",
        "Vỹ",
        "Vĩ",
        "Long",
        "Ninh",
        "Vân",
        "Cẩm Vân",
        "Vân",
        "Ánh Viên",
        "Diễm",
        "Diễm Phúc",
        "Diệu",
    ];
    let html = '<center><h2 style="font-family: math;">Tên ngẫu nhiên</h2></center>';
    let text = '';
    var csvFileData = [];
    let hodemten = '';
    let ho = '';
    let dem = '';
    let ten = '';
    html += '<ul class="list">';
    for (let i = 0; i < amount; i++) {
        ho = Ho[getRandomInt(0, Ho.length)];
        dem = Dem[getRandomInt(0, Dem.length)];
        ten = Ten[getRandomInt(0, Ten.length)];
        hodemten = ho + " " + dem + " " + ten;
        html += `<li>` + hodemten + `</li>`;
        text += hodemten + "\n";
        csvFileData.push([hodemten, ho, dem, ten]);
    }
    html += '</ul>'
    document.querySelector('#result').innerHTML = html;
    const txtbtn = document.querySelector('#txt');
    txtbtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    txtbtn.setAttribute('download', "NgauNhien.txt");
    txtbtn.style.display = 'block';
    var csv = 'Tên Đầy Đủ,Họ,Đệm,Tên\n';
    csvFileData.forEach(function(row) {
        csv += row.join(',');
        csv += "\n";
    });
    const csvbtn = document.querySelector('#csv');
    var universalBOM = "\uFEFF";
    csvbtn.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(universalBOM + csv);
    csvbtn.download = 'NgauNhien.csv';
    csvbtn.style.display = 'block';
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function loadUsers() {
    const amount = document.getElementById('quantity_user').value;
    const len = document.getElementById('len').value;
    let html = '<center><h2 style="font-family: math;">User ngẫu nhiên</h2></center>';
    let text = '';
    var csvFileData = [];
    let userid = '';
    html += '<ul class="list">';
    for (let i = 0; i < amount; i++) {
        userid = makeid(len);
        html += `<li>` + userid + `</li>`;
        text += userid + "\n";
        csvFileData.push([userid]);
    }
    html += '</ul>'
    document.querySelector('#result_user').innerHTML = html;
    const txtbtn = document.querySelector('#txt_user');
    txtbtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    txtbtn.setAttribute('download', "NgauNhien.txt");
    txtbtn.style.display = 'block';
    var csv = 'Id,\n';
    csvFileData.forEach(function(row) {
        csv += row.join(',');
        csv += "\n";
    });
    const csvbtn = document.querySelector('#csv_user');
    var universalBOM = "\uFEFF";
    csvbtn.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(universalBOM + csv);
    csvbtn.download = 'NgauNhien.csv';
    csvbtn.style.display = 'block';
}
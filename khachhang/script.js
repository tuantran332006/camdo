document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const exportBtn = document.getElementById('exportBtn');

    // Lấy danh sách sản phẩm từ localStorage hoặc tạo mảng rỗng
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Hàm hiển thị sản phẩm
    function displayProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p><strong>Giá:</strong> ${product.price} VND</p>
                <p><strong>Danh mục:</strong> ${product.category}</p>
                <p><strong>Mô tả:</strong> ${product.description}</p>
                <button onclick="removeProduct(${index})">Xóa</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Hàm thêm sản phẩm
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newProduct = {
            name: document.getElementById('name').value,
            price: document.getElementById('price').value,
            category: document.getElementById('category').value,
            description: document.getElementById('description').value
        };

        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();

        // Reset form
        productForm.reset();
    });

    // Hàm xóa sản phẩm
    window.removeProduct = function(index) {
        if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
            displayProducts();
        }
    };

    // Hàm xuất file JSON
    exportBtn.addEventListener('click', function() {
        const dataStr = JSON.stringify(products, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'products.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Hiển thị sản phẩm khi tải trang
    displayProducts();
});
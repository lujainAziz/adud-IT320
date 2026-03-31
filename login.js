/**
 * التبديل بين نماذج تسجيل الدخول وإنشاء الحساب
 * @param {string} tab - نوع النموذج المراد إظهاره ('login' أو 'register')
 */
function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab-btn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // تحديث حالة الأزرار (Tabs)
    tabs.forEach((t) => {
        const isLoginTab = t.innerText.includes('Login');
        t.classList.toggle('active', (tab === 'login' && isLoginTab) || (tab === 'register' && !isLoginTab));
    });

    // إظهار وإخفاء النماذج
    if (tab === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    }
}

/**
 * اختيار نوع الحساب (مريض أو مزود خدمة)
 * @param {HTMLElement} el - العنصر الذي تم النقر عليه
 * @param {string} role - قيمة الدور المختار
 */
function selectRole(el, role) {
    // إزالة التحديد من جميع الخيارات
    document.querySelectorAll('.role-option').forEach(o => o.classList.remove('selected'));
    
    // إضافة التحديد للعنصر المختار
    el.classList.add('selected');
    
    // تحديث قيمة الـ Radio Input المخفي
    const radioInput = el.querySelector('input[type="radio"]');
    if (radioInput) {
        radioInput.checked = true;
    }
}

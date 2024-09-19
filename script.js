document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-input');
    const previewContent = document.getElementById('preview-content');
    const saveBtn = document.getElementById('save-btn');

    // 实时预览
    markdownInput.addEventListener('input', updatePreview);

    // 保存功能
    saveBtn.addEventListener('click', saveToLocal);

    function updatePreview() {
        previewContent.innerHTML = marked(markdownInput.value);
    }

    function saveToLocal() {
        const content = markdownInput.value;
        const blob = new Blob([content], {type: 'text/markdown'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'resume.md';
        a.click();
    }
});
document.execCommand('defaultParagraphSeparator',false,'p')

// 加粗
document.getElementById('bold').onclick = function () {
  document.execCommand('bold',false,null)
}

// 斜体
document.getElementById('italic').onclick = function () {
  document.execCommand('italic',false,null)
}

// 删除线
document.getElementById('strikethrough').onclick = function () {
  document.execCommand('strikeThrough',false,null)
}

// 下滑线
document.getElementById('underline').onclick = function () {
  document.execCommand('underline',false,null)
}

// 有序列表
document.getElementById('ordered-list').onclick = function () {
  document.execCommand('insertOrderedList',false,null)
}

// 无序列表
document.getElementById('unordered-list').onclick = function () {
  document.execCommand('insertUnorderedList',false,null)
}

// 添加链接
document.getElementById('link').onclick = function () {
  var address = prompt("请输入链接地址","#")
  document.execCommand('createLink',false,address)
}

// 靠左
document.getElementById('align-left').onclick = function () {
  document.execCommand('justifyLeft',false,null)
}

// 居中
document.getElementById('align-center').onclick = function () {
  document.execCommand('justifyCenter',false,null)
}

// 靠右
document.getElementById('align-right').onclick = function () {
  document.execCommand('justifyRight',false,null)
}

// 撤销
document.getElementById('undo').onclick = function () {
  document.execCommand('undo',false,null)
}

// 重做撤销
document.getElementById('redo').onclick = function () {
  document.execCommand('redo',false,null)
}
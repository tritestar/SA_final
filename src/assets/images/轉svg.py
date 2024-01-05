import base64

# 读取图片文件
with open('C:/Users/asd03/Desktop/SA/demo code/team01_dashboard/Taipei-City-Dashboard-FE/public/images/contributors/toua2.png', 'rb') as image_file:
    # 将图片内容编码为Base64字符串
    base64_string = base64.b64encode(image_file.read()).decode('utf-8')

# 打印Base64字符串
print(base64_string)

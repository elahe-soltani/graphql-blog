export const validate = data => {
    
    const error={};

    if (!data.name.trim()){
        error.name="نام را وارد کنید";
    } else {
        delete error.name;
    }

    if (!data.email){
        error.email = "ایمیل را وارد کنید";
    } else if (! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        error.email="ادرس ایمیل نامعتبر است"
    } else {
        delete error.email;
    }

    if (!data.text.trim()){
        error.text="کامنت را وارد کنید";
    } else {
        delete error.text;
    }
    return error;
}
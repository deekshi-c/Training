import { AbstractControl } from "@angular/forms";

export function checkPassword(control: AbstractControl):{ [key: string]: boolean}|null{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if( password?.pristine || confirmPassword?.pristine){
        return null;
    }
    else return password && confirmPassword && password.value ===  confirmPassword.value? null:{'misMatch': true};

}
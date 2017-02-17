import {FormControl} from '@angular/forms';

export class CustomValidators {
    static email(control: FormControl): any {
        let exp: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value !== undefined && !exp.test(control.value)) {
            return {'email': true, 'currentValue': control.value};
        }
        return null;
    }

    static telefono(control: FormControl): any {
        let exp: any = /^\+\d{2,3}\s\d{10}$/;
        if (control.value !== undefined && !exp.test(control.value)) {
            return {'telefono': true, 'currentValue': control.value};
        }
        return null;
    }

	static formatoNumero(control: FormControl): any {
		let exp: any = /^[0-9]+$/;
		if (control.value !== undefined && !exp.test(control.value)) {
			return {'formatoNumero': true, 'currentValue': control.value};
		}
		return null;
	}
}

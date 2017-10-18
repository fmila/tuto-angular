export class ContactValidatorService {
    isEmail(email: string) {
        if (this.isEmpty(email)) {
            return false;
        }
        let regex = /(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/g;
        return regex.test(email);
    }
    isEmpty(value: string) {
        let regex = /(^$|^.*@.*\..*$)/g;
        return regex.test(value);
    }
}

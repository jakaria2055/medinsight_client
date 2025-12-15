class ValidationHelper {
  static IsLetter(value) {
    if (typeof value !== "string") return false;
    const letterRegex = /^[A-Za-z\s]+$/;
    return letterRegex.test(value);
  }

  static IsEmail(value) {
    if (typeof value !== "string") return false;
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(value);
  }

  static IsNull(value) {
    return value === null || value === undefined;
  }

  static IsEmpty(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === "string" || Array.isArray(value)) {
      return value.length === 0;
    }
    return false;
  }
}

export default ValidationHelper;

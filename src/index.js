export const onlyNumberMask = value => {
    return value.replace(/\D/g, '');
}

export const cpfMask = value => {

    const onlyNumber = value.replace(/\D/g, "");
    const f = onlyNumber.slice(0, 11);
    let finalValue = "";
    for (let i = 0; i < f.length; i++) {
      if ([3, 6].includes(i)) {
        finalValue += `.${f[i]}`;
      } else if (i === 9) {
        finalValue += `-${f[i]}`;
      } else {
        finalValue += `${f[i]}`;
      }
    }
    return finalValue;

}

export const maxLengthMask = length => value => {
    return value.slice(0, length);
}

export const onlyCharactersMask = value => {
    return value.replace(/[^a-zA-Z\u00C0-\u00FF ]/g, "");
}

export const celphoneMask = value => {

  const onlyNumber = value.replace(/\D/g, "");
  const f = onlyNumber.slice(0, 11);
  let finalValue = "";
  for (let i = 0; i < f.length; i++) {
    if (i === 0) {
      finalValue += `(${f[i]}`;
    } else if (i === 2) {
      finalValue += `) ${f[i]}`;
    } else if (i === 7) {
      finalValue += `-${f[i]}`;
    } else {
      finalValue += `${f[i]}`;
    }
  }
  return finalValue;

}

export const telephoneMask = value => {

  const onlyNumber = value.replace(/\D/g, "");
  const f = onlyNumber.slice(0, 10);
  let finalValue = "";
  for (let i = 0; i < f.length; i++) {
    if (i === 0) {
      finalValue += `(${f[i]}`;
    } else if (i === 2) {
      finalValue += `) ${f[i]}`;
    } else if (i === 6) {
      finalValue += `-${f[i]}`;
    } else {
      finalValue += `${f[i]}`;
    }
  }
  return finalValue;

}

export const onlyNumberStringToThreeDigit = value => {

  let onlyNumberValue = String(value).replace(/\D/g, "").replace(/^[0]+/, "");

  if (onlyNumberValue) {
    while (onlyNumberValue.length < 4) {
      onlyNumberValue = `0${onlyNumberValue}`;
    }
    return onlyNumberValue.replace(/(\d{1,3})$/, ",$1");
  }
  return "0,000";

}

export const onlyNumberStringToTwoDigit = value => {

  let onlyNumberValue = String(value).replace(/\D/g, "").replace(/^[0]+/, "");

  if (onlyNumberValue) {
    while (onlyNumberValue.length < 3) {
      onlyNumberValue = `0${onlyNumberValue}`;
    }
    return onlyNumberValue.replace(/(\d{1,2})$/, ",$1");
  }
  return "0,00";

}

export const percentageMask = value => {
  const [integer] = String(value).split('.');
  return `${integer} %`
}

export const cardValidThroughMask = value => {

  const onlyNumbers = String(value).replace(/\D/g, '');
  const slicedValues = onlyNumbers.slice(0, 4);

  let finalValue = '';
  for (let i = 0; i < slicedValues.length; i++) {
    if (i === 2) {
      finalValue += `/${slicedValues[i]}`;
    } else {
      finalValue += `${slicedValues[i]}`;
    }
  }
  return finalValue;

}

export const cardNumberMask = value => {
  
  const onlyNumbers = String(value).replace(/\D/g, "");
  const slicedValues = onlyNumbers.slice(0, 16);

  let finalValue = "";
  for (let i = 0; i < slicedValues.length; i++) {
    if (i !== 0 && i % 4 === 0) {
      finalValue += ` ${slicedValues[i]}`;
    } else {
      finalValue += `${slicedValues[i]}`;
    }
  }
  return finalValue;

}

export const moneyMask = value => {

  if (!value) {
    return "";
  }
  if (value[value.length - 1] === ".") {
    value = value.replace(".", ",");
  }
  const haveDot = /\,/.test(value);
  const [integer, float] = value.split(",");
  let numberInteger = "";
  let numberFloat = "";
  if (integer) {
    numberInteger = integer.replace(/[^\d,]/g, "");
  }
  if (float) {
    const [firstDigits] = float.match(/\d{1,2}/);
    numberFloat = firstDigits.replace(/[^\d,]/g, "");
  }

  return `R$ ${numberInteger}${haveDot ? "," : ""}${
    numberFloat ? numberFloat : ""
  }`;

}

export const integerMoneyMask = value => {

  const onlyNumber = value.replace(/\D/g, '');

  if (!onlyNumber) {
    return '';
  }

  return `R$ ${onlyNumber}`;

}

export const cepMask = value => {

  const onlyNumbers = String(value).replace(/\D/g, "");
  const slicedValues = onlyNumbers.slice(0, 8);

  let finalValue = "";
  for (let i = 0; i < slicedValues.length; i++) {
    if (i === 5) {
      finalValue += `-${slicedValues[i]}`;
    } else {
      finalValue += `${slicedValues[i]}`;
    }
  }
  return finalValue;

}

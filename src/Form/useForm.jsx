import { useState, useEffect } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';


const spreadsheetid = "1m3mLO7rpHHmvcTdgOzSremUd7C_vCCzXAl9Ie-UnkCk";
const SHEET_ID = "0";
const CLIENT_EMAIL = "anwesha@parikalan-event-registration.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXeohHRSzAo2FY\nvcwcuFBw4cf5rqqxUZ/i6WVnfM1akeHVO3lh9D+oJH6S/fgWVZnIp9DZNwdxeNka\nGeRIK4nhoNXW2GW8ijYpCPF2lRqdbvUaHxlhnGVPj01BpiYosESR/g8eQdzDS7t2\nfva/D73xBGiu3h4ZClXCBd+7TjJsEncQ9j0afFPl8nCxLmd/5a1n7e4s8MlEljmc\nBmNMy+qUK8n2WxhIRI60g8rsrLwJzUfEYh45Q+H2KVZS/+5UhB3ClJbsGMExBU+a\nDvrh7uZYUodokb06pQt6oBm90CZQOQCh1OvEpoB0euZkvabsaaa3yJbubQHXQZvB\ncOc27PiBAgMBAAECggEAAKZwILrA2WtjPbeNHN1NFV7ythCh/zSM6PxFdrhjaK1k\neJqJdYyZQMY2LpQvnkM1OMP3oDlUYiJwgdIHfF89wLAEv4N1+OVVQL+MplXJyCt8\nv0CrNDgw6Nc5CzxgCdarRKySny57L6iK1wITEVRLQNZIuL0h46cNj3YOIsZibnJP\nAk53WHOCFPeodhtdo/Ei+kRRCigdL6CGeCTUVliJTXG23AfIx3SJOPACZeQtTvMk\ntBq+PcHy+HDRISj0yDWyb9CUXMk+SFbj9n0C3zCz5tV89DMpXnIypjJLj7uHvvQo\nbkq+xcaSDbIxf34DWPTG5eVXCWbW4ndzLBDnlgu7zQKBgQDHgMhkXfVP0RZq1nQF\nChmJqFiyEttxvrTOHQqHda1OY7/UkM+mh/pJy875rHHkW3YKrMR3LfDc8Qn7ABkN\n8AyziCqFHG2SY4WRYAO6OjycOuklSYMdRivnmqNtw5+zWVAABhE6o8zvsTG4Vdos\naXVjNXT1C5nN6ISAfHScYF4HGwKBgQDCYCk5BdvzZZNYG6IKrglzNeOdcVBRILs8\n3JU6l4bxPKC6eNnjCVT2upmZTgIap0yAvBGSTl5yycTeApq9hwEpqjZsGVspM6na\nWvYfUV0LvTxUwPN0PKLJzjm9Pn5prtbXHTq6JTfaG9ySEOTLaLU1gVR5S9wsX4wo\n13Fc00bskwKBgQCJKMgdAOAD9QtFfpUbVdtC4gPAwegvJl7mCd9QTB5Pc5LSUJEC\nvB/elomA7AcNabgZFLip+2LKc8lZ0LJo+62vzKD3DRlj+Jo+3VUStrEu8+2Qnh7P\nhIvw2kcb0s+8HV479e/oce8Wp6s4QYYS3JpBD+KOCmC+yOo379i4HiTnGwKBgQCT\nRvtVGoxq4ub+1ok0IGRGqGlbrTUXE37rgZOMvq1fcfmy8MjfTv3SqNajI0lS2rqL\nvHRv7/N+dEU3lq+atYV7BV6RD7FUCbJEIbHlTuf6chsZeM2+oAcUc66qJoTwHKrq\neVo7GuIz3/KDtks1mJPdA6527bTY5lizxXI+zFMsAwKBgHp54VkT6oiF3wd7INK4\nn5qW19h6Pc80rFRH9ZwIf8Z5W/CTJqnSReBdpZK+ELM2wPDxOE+xx0GwdKVabvhL\n94aRRJRuE2aTcLllxT14gSB5/r1euDGCpARuDuBEDaJtjDmdXwnpjVK1HDyfgszM\nk0t99mXs6Z2PJzb/k49M1aJD\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(spreadsheetid);
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    phonenumber: '',
    event: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    setErrors(validate(values));
    setIsSubmitting(true);
    
    
  };
  async function sheet (){
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(values);
    console.log(values);
  }
  useEffect(
     () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          callback();
          sheet();
        }
      
    },
    [errors]
  );
  
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
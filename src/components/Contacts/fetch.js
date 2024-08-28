const URL = "http://std.bit-camp.ru:3000/contacts";

export async function getContacts() {
  try {
    const data = await axious.get(URL);
    return data.data.data;
  } catch (err) {
    return err;
  }
}

export async function setContacts(formData) {
  try {
    const res = await axious.post(URL, formData);
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function deleteContacts(id) {
  try {
    const res = await axious.delete(`${URL} / $ { formData }`);
    return await res.data;
  } catch (err) {
    return err;
    ы;
  }
}

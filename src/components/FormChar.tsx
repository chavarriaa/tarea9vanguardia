import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormikProvider, useFormik } from "formik";

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = "man, tenes que poner algo";
  } else if (values.name.length > 4) {
    errors.name = "man, tiene que ser mayor que 4";
  }

  if (!values.alias) {
    errors.alias = "man, tenes que poner algo";
  } else if (values.alias.length > 4) {
    errors.alias = "man, tiene que ser mayor que 4";
  }
  if (!values.alias || values.alias == 0) {
    errors.alias = "man, tenes que poner algo";
  }

  if (!values.actor) {
    errors.actor = "man, tenes que poner algo";
  } else if (values.name.actor > 4) {
    errors.actor = "man, tiene que ser mayor que 4";
  }
  return errors;
};

export default function FormCharacter({ trigger: Trigger }: any) {
  const [show, setShow] = React.useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      alias: "",
      state: "",
      actor: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div onClick={() => setShow(true)}>{Trigger}</div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo caracter</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name ? (
                <Form.Text>{formik.errors.name}</Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="alias">
              <Form.Control
                placeholder="Alias"
                name="alias"
                value={formik.values.alias}
                onChange={formik.handleChange}
              />
              {formik.errors.alias ? (
                <Form.Text>{formik.errors.alias}</Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="state">
              <Form.Select
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              >
                <option value="0">Seleccione estado</option>
                <option value="1">Vivo</option>
                <option value="2">Muerto</option>
                <option value="3">Desconocido</option>
              </Form.Select>
              {formik.errors.state ? (
                <Form.Text>{formik.errors.state}</Form.Text>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="actor">
              <Form.Control
                placeholder="actor"
                name="actor"
                value={formik.values.actor}
                onChange={formik.handleChange}
              />
              {formik.errors.actor ? (
                <Form.Text>{formik.errors.actor}</Form.Text>
              ) : null}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={(e) => formik.handleSubmit()}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

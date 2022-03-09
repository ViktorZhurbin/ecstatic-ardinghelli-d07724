import {
  Button,
  Form,
  Input,
  Label,
  Terms,
  TextField,
  Wrapper,
} from "./CurrencyForm.style";

export const CurrencyForm = () => {
  return (
    <Wrapper>
      <Form>
        <TextField>
          <Label htmlFor="code">Cryptocurrency code</Label>
          <Input type="text" id="code" name="code" />
        </TextField>
        <Button type="submit">Add</Button>
      </Form>
      <Terms>Use of this service is subject to terms and conditions.</Terms>
    </Wrapper>
  );
};

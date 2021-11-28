import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import { Formik, Form, Field } from 'formik';

export function FormBox() {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'User ID is required';
    } else if (isNaN(value)) {
      error = 'Invalid value';
    }
    return error;
  }

  // function redirectToSearch(values){
  //   return(
  //     <DisplayDatas id={values}/>
  //   )
  // }

  return (
    <Box>
      <Formik
        initialValues={{ name: 'ID' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            values = JSON.parse(JSON.stringify(values, null, 2));
            window.location = window.location.href + `user/${values}`;
          }, 1000);
        }}
      >
        {props => (
          <Form marinTop={4}>
            <Flex mt={4}>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <Input
                      {...field}
                      id="name"
                      placeholder="ID của người dùng"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                ml={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Tìm
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

import {
    Box,
    FormControl,
    FormLabel,
    Editable,
    EditableInput,
    EditablePreview,
    FormErrorMessage,
    IconButton, 
    useEditableControls} from "@chakra-ui/react"
import { CheckIcon, EditIcon } from '@chakra-ui/icons'
import { Field } from 'formik';
  
const CustomEditable = ({label, name, id, defaultValue, mb='16px', ...rest}) => {

  function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing    ? <IconButton
                              minW={'none'}
                              w={{base:'20px', md:'32px'}}
                              h={{base:'20px', md:'32px'}}
                              bg='#FDF7F2'
                              color='#F59256'
                              borderRadius='50%'
                              icon={<CheckIcon />} {...getSubmitButtonProps()} />
                          : <IconButton
                              minW={'none'}
                              w={{base:'20px', md:'32px'}}
                              h={{base:'20px', md:'32px'}}
                              bg='#FDF7F2'
                              color='rgba(17, 17, 17, 0.6);'
                              borderRadius='50%'
                              icon={<EditIcon />} {...getEditButtonProps()} />         
    }

  return (
    <Box  w={{base:'252px', md:'379px'}} mb={mb}>
          <Field>
            {({ form }) => (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                  <Editable
                      defaultValue={defaultValue}
                      display="flex"
                      alignItems="center">
                      <FormLabel
                          display="inline-flex"
                          htmlFor={id}
                          fontSize={{base:'12px', md:'18px'}}
                          lineHeight={'short'}
                          letterSpacing={'0.04em'}
                          fontWeight={'medium'}
                          alignItems='center'
                          m='0'
                          h={{base:'24px', md:'32px'}}
                          w={{base:'56px', md:'83px'}}
                          mr={{base:'9px', md:'24px'}}
                          >{label}
                      </FormLabel>
                      <EditablePreview
                          w={{base:'159px', md:'216px'}}
                          h={{base:'24px', md:'32px'}}
                          p={{base:'4px 18px', md:'4px 12px'}}
                          fontSize={{base:'12px', md:'18px'}}
                          letterSpacing={'0.04em'}
                          lineHeight={'short'}
                          border= "1px solid transparent"
                          mr={{base:'9px', md:'24px'}}
                      />
                      <Field
                          as={EditableInput}
                          id={id}
                          name={name}
                          variant='filled'
                          h={{base:'24px', md:'32px'}}
                          w={{base:'159px', md:'216px'}}
                          p={{base:'4px 18px', md:'4px 12px'}}
                          mr={{base:'9px', md:'24px'}}
                          fontSize={{base:'12px', md:'18px'}}
                          letterSpacing={'0.04em'}
                          lineHeight={'short'}
                          bg='#FDF7F2'
                          border= "1px solid rgba(245, 146, 86, 0.5)"
                          borderRadius='40px'
                          _placeholder={{ color: '#111111' }}
                          {...rest}
                      />
                      <EditableControls />
                      <FormErrorMessage
                          fontSize="12px">
                          {form.errors[name]}
                      </FormErrorMessage>
                  </Editable>
              </FormControl>
            )}
          </Field>
    </Box>
  )
}

export default CustomEditable
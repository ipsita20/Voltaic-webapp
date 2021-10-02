import { ErrorType, FieldTypes, FormField } from '../models/util.model';

export const ContactInfoLabels: { [key: string]: FormField } = {
  firstNamePrimary: {
    fieldLabel: 'First Name',
    fieldName: 'first_name',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.TEXT,
    isEditable: false,
    isRequired: true,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'This field is required.',
      },
    ],
  },
  lastNamePrimary: {
    fieldLabel: 'Last Name',
    fieldName: 'last_name',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.TEXT,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    errors: [],
  },
  phonePrimary: {
    fieldLabel: 'Phone',
    fieldName: 'phone',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.TEXT,
    isEditable: false,
    isRequired: true,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'This field is required.',
      },
    ],
  },
  emailPrimary: {
    fieldLabel: 'Email',
    fieldName: 'email',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.EMAIL,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    errors: [],
  },
  firstNameSecondary: {
    fieldLabel: 'First Name',
    fieldName: 'Secondary_Owner_1',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.TEXT,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    errors: [],
  },
  lastNameSecondary: {
    fieldLabel: 'Last Name',
    fieldName: 'Last_Name_Secondary',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.TEXT,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    errors: [],
  },
  phoneSecondary: {
    fieldLabel: 'Phone',
    fieldName: 'Phone_Secondary',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.TEXT,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'This field is required.',
      },
    ],
  },
  emailSecondary: {
    fieldLabel: 'Email',
    fieldName: 'Email_Secondary',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.EMAIL,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    errors: [],
  },
  notes: {
    fieldLabel: 'Notes',
    fieldName: 'Notes',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.TEXTAREA,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    errors: [],
  },
  
};

export const UtilityInfoLabels: { [key: string]: FormField } = {
    utilityCompany: {
        fieldLabel: 'Utility Company',
        fieldName: 'company',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.SELECT,
        isEditable: false,
        isRequired: false,
        isDisabled: true,
        options: [],
        optionConfig: { labelKey: 'name', valueKey: 'name' },
        errors: []
      },
      utilityBillOne: {
        fieldLabel: 'Utility Bill 1',
        fieldName: 'utility_bill_1',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.FILE,
        isEditable: false,
        isRequired: false,
        isDisabled: false,
        errors: []
      },
      utilityBillTwo: {
        fieldLabel: 'Utility Bill 2',
        fieldName: 'utility_bill_2',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.FILE,
        isEditable: false,
        isRequired: false,
        isDisabled: false,
        errors: []
      },
      annualBill: {
        fieldLabel: 'Annual Bill ($)',
        fieldName: 'annual_bill',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.TEXT,
        isEditable: false,
        isRequired: false,
        isDisabled: false,
        errors: []
      },
      annualUsage: {
        fieldLabel: 'Annual Usage (kWh)',
        fieldName: 'annual_usage',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.TEXT,
        isEditable: false,
        isRequired: false,
        isDisabled: false,
        errors: []
      }
};

export const LeadInfoLabels: { [key: string]: FormField } = {
    leadSource: {
        fieldLabel: 'Lead Source',
        fieldName: 'master_lead_source_id',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.SELECT,
        isEditable: false,
        isRequired: false,
        isDisabled: false,
        options: [],
        optionConfig: { labelKey: 'name', valueKey: 'id' },
        errors: []
    },
    leadGenerator: {
      fieldLabel: 'Lead Generator',
      fieldName: 'master_lead_owner_id',
      placeholder: '',
      associatedfieldName: '',
      fieldType: FieldTypes.SELECT,
      isEditable: false,
      isRequired: false,
      isDisabled: false,
      options: [],
      optionConfig: { labelKey: 'name', valueKey: 'id' },
      errors: []
    },
    salesRep: {
      fieldLabel: 'Sales Rep',
      fieldName: 'sales_rep_id',
      placeholder: '',
      associatedfieldName: '',
      fieldType: FieldTypes.SELECT,
      isEditable: false,
      isRequired: false,
      isDisabled: false,
      options: [],
      optionConfig: { labelKey: 'name', valueKey: 'id' },
      errors: []
    },
    primaryLanguage: {
      fieldLabel: 'Primary Language',
      fieldName: 'primary_lang',
      placeholder: '',
      associatedfieldName: '',
      fieldType: FieldTypes.SELECT,
      isEditable: false,
      isRequired: false,
      isDisabled: false,
      options: [],
      optionConfig: { labelKey: 'value', valueKey: 'id' },
      errors: []
    },
    homeType: {
      fieldLabel: 'Home Type',
      fieldName: 'home_type',
      placeholder: '',
      associatedfieldName: '',
      fieldType: FieldTypes.SELECT,
      isEditable: false,
      isRequired: false,
      isDisabled: false,
      options: [],
      optionConfig: { labelKey: 'value', valueKey: 'id' },
      errors: []
    },
    hoa: {
      fieldLabel: 'HOA',
      fieldName: 'hoa',
      placeholder: '',
      associatedfieldName: '',
      fieldType: FieldTypes.SELECT,
      isEditable: false,
      isRequired: false,
      isDisabled: false,
      options: [],
      optionConfig: { labelKey: 'value', valueKey: 'id' },
      errors: []
    },
};

export const ScheduleAppointmentLabels: { [key: string]: FormField } = {
  salesRep: {
    fieldLabel: 'Sales Rep',
    fieldName: 'sales_rep_id',
    placeholder: '',
    associatedfieldName: '',
    fieldType: FieldTypes.SELECT,
    isEditable: false,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'id' },
    errors: []
  },
    date: {
        fieldLabel: 'Date',
        fieldName: 'appointment_date',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.DATE,
        isEditable: false,
        isRequired: false,
        isDisabled: false,
        errors: []
      },
    time: {
        fieldLabel: 'Time',
        fieldName: 'appointment_time',
        placeholder: '',
        associatedfieldName: '',
        fieldType: FieldTypes.SELECT,
        isEditable: false,
        isRequired: false,
        isDisabled: false,
        options: [],
        optionConfig: { labelKey: 'value', valueKey: 'value' },
        errors: []
      },
      
};
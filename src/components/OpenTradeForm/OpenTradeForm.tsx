import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik, FieldProps, FormikHelpers } from "formik";

import { openTradeAction } from "../../state/trades/actions";
import { Currencies } from "../../types";

interface FormValues {
  amount: number;
  currency: Currencies;
}

interface CurencyOption {
  value: Currencies;
  label: Currencies;
}

export const OpenTradeForm = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    dispatch(openTradeAction(values.amount, values.currency));
    actions.setSubmitting(false);
  };

  const CurrenciesOptions: CurencyOption[] = [
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "EUR",
      label: "EUR",
    },
  ];

  const formInitialValues: FormValues = { amount: 0, currency: "USD" };

  const validateAmount = (value: FormValues["amount"]) => {
    let errorMessage;
    if (value <= 0) {
      errorMessage = "amount must be higher than zero";
    }
    return errorMessage;
  };

  return (
    <Formik initialValues={formInitialValues} onSubmit={handleSubmitForm}>
      {() => (
        <Form className="open-trade-form">
          <Field
            type="amount"
            name="amount"
            placeholder="Amount"
            validate={validateAmount}
          >
            {({ field, form: { errors } }: FieldProps) => {
              return (
                <div className="field">
                  <label htmlFor={field.name}>Enter amount:</label>
                  <input
                    type="number"
                    {...field}
                    onFocus={(event) => event.target.select()}
                  />
                  <p className="error-msg">{errors && errors.amount}</p>
                </div>
              );
            }}
          </Field>
          <Field as="select" name="currency" className="currency">
            {CurrenciesOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Field>
          <button className="default-button" type="submit">
            Buy
          </button>
        </Form>
      )}
    </Formik>
  );
};

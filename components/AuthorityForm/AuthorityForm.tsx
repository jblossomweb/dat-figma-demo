import type { Content } from '@/types/Content';

import CheckboxIcon from '@/icons/CheckboxIcon';
import Button from '@/components/Button';

import styles from './AuthorityForm.module.css';

export interface AuthorityFormProps {
  authorityForm: Content['authorityForm'];
}

const AuthorityForm: React.FC<AuthorityFormProps> = ({
  authorityForm,
}) => (
  <div className={styles.authorityForm}>
    <form id={authorityForm.id} className={styles.form}>
      <h2 className={styles.heading}>
        {authorityForm.heading}
      </h2>
      <div className={styles.fields}>
        {authorityForm.fields.map((field) => 
          field.type === 'select' ? (
            <select
              key={field.name}
              name={field.name}
              className={styles.field}
              required={field.required}
              defaultValue=""
            >
              <option disabled hidden value="">
                {`${field.label}${field.required ? '*' : ''}`}
              </option>
              {(field.options || []).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={`${field.label}${field.required ? '*' : ''}`}
              className={styles.field}
              required={field.required}
            />
          ))}
      </div>
      <div className={styles.authorityNeeded}>
        <legend className={styles.legend}>{authorityForm.authorityNeeded.legend}</legend>
        <div className={styles.options}>
          {authorityForm.authorityNeeded.options.map((option) => (
            <label key={option} className={styles.option}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="authorityNeeded"
                  value={option}
                />
                <CheckboxIcon className={styles.checkmark} />
              </div>
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.consent}>
        {authorityForm.consent}
      </div>
      <div className={styles.submit}>
        <Button
          type="submit"
          variant="primary"
          label={authorityForm.submitLabel}
        />
      </div>
    </form>
  </div>
);

export default AuthorityForm;

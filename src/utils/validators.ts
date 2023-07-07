import Joi from "joi"

export const validateName = (user: string) => {
    const nameSchema = Joi.object({
        name: Joi.string().min(3).message(
            "The name must be at least 3 characters long"
          )
          .required()
    })

    const { error } = nameSchema.validate({ name: user });

    return error;
}

export const validatePassword = (key: any) => {
    const passwordSchema = Joi.object({
        password: Joi.string()
        .min(8)
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.!@#$%^&*])/)
        .message(
          "The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        )
        .required()
    })
    
    const { error } = passwordSchema.validate({password: key});

    return error;
}
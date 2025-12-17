const validateAppointment = (data) => {
  if (!data.customerId) return "customerId is required";
  if (!data.serviceName) return "serviceName is required";
  if (!data.appointmentDate || isNaN(Date.parse(data.appointmentDate)))
    return "appointmentDate must be a valid date";

  return null;
};

export default validateAppointment;

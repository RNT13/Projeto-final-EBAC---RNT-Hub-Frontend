import toast from 'react-hot-toast'

export function handleApiError(err: unknown) {
  const error = err as ApiResponse

  if (error?.data) {
    // Caso especial: JWT / DRF `detail`
    if (error.data.detail) {
      toast.error(String(error.data.detail))
      return
    }

    // Campos específicos
    for (const key in error.data) {
      const message = Array.isArray(error.data[key]) ? error.data[key][0] : error.data[key]

      toast.error(String(message))
    }
  } else {
    toast.error('Erro inesperado. Tente novamente.')
  }
}

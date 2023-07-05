const mapping: Record<string, string> = {
  individuals: 'individual',
  'performance-evaluations': 'performance_evaluation',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

t = linspace(0, 10, 100);  % Change the range and number of points as needed

% Define the parametric equations for the curve
f=x(t)^2+2*x(t)*y(t)+x(t)*z(t);  % X-component of the 

% Plot the 3D curve
figure;
plot3(f, 'LineWidth', 0.1);
grid on;

% Add labels and title
xlabel('X-axis');
ylabel('Y-axis');
zlabel('Z-axis');
title('3D Parametric Curve');

% Optional: Set axis limits
xlim([-1 1]);
ylim([-1 1]);
zlim([0 10]);

% View the 3D plot from a different angle (optional)
view([-45 30]);



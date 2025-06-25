FROM php:8.3-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libzip-dev libpng-dev libonig-dev libxml2-dev \
    nodejs npm gnupg

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# (Optional) Install Node.js versi lebih baru via NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Set working directory
WORKDIR /var/www/html

# Copy source code
COPY . .

# Install dependencies Laravel & JS
RUN composer install --no-interaction --prefer-dist --optimize-autoloader \
    && npm install \
    && npm run build

# Beri izin folder storage & bootstrap
RUN chmod -R 775 storage bootstrap/cache

# Expose port 9000 (PHP-FPM default)
EXPOSE 9000

CMD ["php-fpm"]

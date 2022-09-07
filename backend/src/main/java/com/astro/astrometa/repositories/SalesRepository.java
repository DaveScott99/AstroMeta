package com.astro.astrometa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.astro.astrometa.entities.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long> {

}

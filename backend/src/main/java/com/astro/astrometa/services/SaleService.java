package com.astro.astrometa.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.astro.astrometa.entities.Sale;
import com.astro.astrometa.repositories.SalesRepository;

@Service
public class SaleService {
	
	@Autowired
	private SalesRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
	
}
